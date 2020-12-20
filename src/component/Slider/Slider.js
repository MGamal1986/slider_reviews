import React, { useEffect, useState } from "react";
import classes from "./Slider.module.scss";
import { FaQuoteRight, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import cx from "classnames";
function Slider({ persons }) {
    const [index, setIndex] = useState(0);
    // every time index change due to auto slider useEffect or click buttons
    // we check index and change index depend on this check if we reach last index we start from first
    // and if we reach first index we start from the last
    useEffect(() => {
        const lastIndex = persons.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index]);

    // make slider auto for 3 seconds
    useEffect(() => {
        let timer = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 3000);
        return () => {
            clearInterval(timer);
        };
    }, [index]);

    return (
        <div className={classes.Main}>
            <div className={classes.Title}>
                <h2>
                    <span>/</span> reviews
                </h2>
            </div>
            <div className={classes.Slider}>
                {persons.map((person, personIndex) => {
                    // let positionClass = "nextSlide";
                    let positionClass = cx(classes.NextSlide);
                    if (index === personIndex) {
                        positionClass = cx(classes.ActiveSlide);
                    }
                    if (
                        personIndex === index - 1 ||
                        (index === 0 && personIndex === persons.length - 1)
                    ) {
                        positionClass = cx(classes.LastSlide);
                    }
                    return (
                        <main key={person.id} className={positionClass}>
                            <div className={classes.Image}>
                                <img src={person.image} alt={person.name} />
                            </div>
                            <div className={classes.Info}>
                                <h4>{person.name}</h4>
                                <h5>{person.title}</h5>
                            </div>
                            <div className={classes.Text}>{person.quote}</div>
                            <div className={classes.Icon}>
                                <FaQuoteRight />
                            </div>
                        </main>
                    );
                })}
                <div className={classes.Prev}>
                    <button onClick={() => setIndex((prev) => prev - 1)}>
                        <FaAngleLeft />
                    </button>
                </div>
                <div className={classes.Next}>
                    <button onClick={() => setIndex((prev) => prev + 1)}>
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Slider;
