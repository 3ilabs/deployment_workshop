"use client"
import { useState } from "react"
import Image from "next/image"
export default function Home() {
    const [firstButton, setFirstButton] = useState(false)
    const [firstButtonHover, setFirstButtonHover] = useState(false)
    const [mentor, setMentor] = useState("")
    const [winner, setWinner] = useState(false)

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        setWinner(true)
    }
    return (
        <div className="flex h-full flex-col items-center justify-center">
            {!firstButton ? (
                <div className="text-white">
                    {firstButtonHover ? "check the console" : "Id look around"}
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Your Favorite Mentor?"
                        type="text"
                        value={mentor}
                        onChange={(e) => {
                            setMentor(e.target.value)
                        }}
                    />
                    {mentor === "Cloud" && (
                        <button className="bg-black text-white">
                            Good Answer
                        </button>
                    )}
                </form>
            )}

            <div className="flex w-full justify-end">
                <button
                    className="h-10 w-10 bg-blue-300 hover:bg-white"
                    onClick={() => {
                        setFirstButton(true)
                        console.log("display:none is your bestfriend here")
                    }}
                    onMouseEnter={() => {
                        setFirstButtonHover(true)
                    }}
                    onMouseLeave={() => {
                        setFirstButtonHover(false)
                    }}
                >
                    {firstButtonHover ? "click me" : ""}
                </button>
            </div>
            {firstButton && (
                <div className="absolute h-80 w-80 bg-blue-300"></div>
            )}
            {winner && (
                <div>
                    <Image
                        src="/treasureHunt.png"
                        fill
                        alt="a picture of a treasure chest"
                    ></Image>
                </div>
            )}
        </div>
    )
}
