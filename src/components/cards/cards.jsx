const Cards = () => {
    const array = [
        {
            header: "Профессиональные инструкторы с опытом",
            title: "Наши преподаватели - признанные специалисты, которые знают, как сделать обучение интересным и полезным, благодаря многолетнему опыту в IT-индустрии."
        },
        {
            header: "Эффективные методы и практическое обучение",
            title: "Наша учебная программа построена на практических заданиях и реальных кейсах, чтобы каждый урок был полезен и применим."
        },
        {
            header: "Интенсивное обучение с персональной поддержкой",
            title: "Занятия шесть дней в неделю и персональные консультации помогут вам достигнуть успеха быстрее. Мы рядом на каждом этапе вашего пути."
        }
    ];
    
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8">
            {array.map((el, index) => (
                <div 
                    className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg p-6 w-80 md:w-96 text-center transition-transform hover:scale-105" 
                    key={index}
                >
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-bold mb-2">{el.header}</h2>
                        <p className="text-base">{el.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
