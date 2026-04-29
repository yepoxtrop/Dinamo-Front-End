export function CardInfoBasic({params}){
    return(
        <>
            <div>

                <div>
                    <div>{params.icon}</div>
                    <div>
                        <span>{params.title}</span>
                    </div>
                </div>
                <div>
                    <span>{params.info}</span>
                </div>
                <div>
                    <span>Promedio{params.time}</span>
                </div>
                <div>
                    <div>

                    </div>
                    <span>{params.percentage}% {params.percentageAlert}</span>
                </div>
            </div>
        </>
    )
}