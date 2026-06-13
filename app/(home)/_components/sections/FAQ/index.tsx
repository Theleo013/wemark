"use client"
import { useState } from "react"
import FaqStyles from "./faq.module.scss"
import { XschoolData } from "@/lib/xschool";
import parse from "html-react-parser";

interface FAQSectionProps {
    data: XschoolData;
}

const FAQSection = ({ data }: FAQSectionProps) => {
    const { faq_title, xschool_faq } = data
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className={FaqStyles.faqSection}>
            <h1>{faq_title}</h1>

            <div className={FaqStyles.faqList}>
                {xschool_faq.map((faq, index) => (
                    <div
                        key={index}
                        className={`${FaqStyles.faqItem} ${openIndex === index ? FaqStyles.open : ""}`}
                    >
                        <div className={FaqStyles.faqQuestion} onClick={() => toggle(index)}>
                            <h3>{faq.question}</h3>
                            <span className={FaqStyles.icon}>
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </div>

                        {openIndex === index && (
                            <div className={FaqStyles.faqAnswer}>
                                {parse(faq.answer)}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQSection