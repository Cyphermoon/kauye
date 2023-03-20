import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { clearTimeout } from 'timers';
import Modal from '../common/ModalOverlay';

interface OTPInputProps {
    length: number
    handleModalChanged: Function
}

const OTPInput = ({ length, handleModalChanged }: OTPInputProps) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [values, setValues] = useState<string[]>(Array(length).fill(""))
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        handleModalChanged(true)
        setShowModal(true);
    };

    const handleCloseModal = () => {
        handleModalChanged(false)
        setShowModal(false);
    };

    const handleInputChange = (index: number, value: string) => {
        //focus on next element if it exists
        setValues((previousState) => {
            const newValues = [...previousState]
            newValues[index] = value
            return newValues
        })

        if (value.length === 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]?.focus();
        }

        // move the first element if it is the last element
        else if (value.length === 1 && index === inputRefs.current.length - 1) {
            inputRefs.current[0]?.focus();
        }
    };

    const handleInputKeyDown = (index: number, key: string) => {
        const currentIndex = index;
        const previousIndex = index - 1;
        const nextIndex = index + 1;

        // Move focus to previous input element on backspace
        if (key === "Backspace" && values[currentIndex] === "") {
            inputRefs.current[previousIndex]?.focus();
        }

        // Move focus to next input element on enter
        if (key === "Enter" && currentIndex < length - 1) {
            inputRefs.current[nextIndex]?.focus();
        }
    };

    const areBoxesFilled = useMemo(
        () => (
            () => {
                return values.every((value) => value != "")
            }
        )
        , [values])

    const isBoxEmpty = (value: string) => {
        return value === ""
    }

    useEffect(() => {
        if (!areBoxesFilled()) return
        handleOpenModal()

        setTimeout(() => {
            handleCloseModal()
        }, 2000)


    }, [areBoxesFilled])

    return (
        <>
            <div className="flex justify-center items-center space-x-2">
                {Array.from({ length }, (_, index) => (
                    <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="tel"
                        value={values[index]}
                        maxLength={1}
                        pattern="\d{1}"
                        className={`border border-gray-300 w-12 h-14 text-center otp-shadow rounded-lg 
                    ${areBoxesFilled() ? "border-primary" : null} ${isBoxEmpty(values[index]) ? "border-red-400" : null}`}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        onKeyDown={(e) => handleInputKeyDown(index, e.key)}
                    />
                ))}
            </div>
            <Modal isOpen={showModal} handleClose={handleCloseModal} >
                <Image src={"/asset/spinner.svg"} width={50} height={50} alt="loading icon" />
            </Modal>
        </>

    );
};

export default OTPInput;
