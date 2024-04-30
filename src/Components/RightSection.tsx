import React from "react";

type newsProp = {
    news:any
}
const RightSection = (props:newsProp) => {
    return (
       <div className="w-56">
            <h1>TOP NEWS</h1>
            {props?.news?.map((data:any) => {
                return <>
                <ul className=" max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li className="font-semibold text-gray-900 dark:text-black text-pretty">{data?.title}</li>
                </ul>
                <br className="mt-4"/>
                </>
            })}
       </div>
    )
}

export default RightSection

