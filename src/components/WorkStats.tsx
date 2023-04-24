interface IWorkStats_props {
    company: string,
    location: string,
    position: string,
    team: string,
    dates: string
}

function capFirst(text: string) :string {
    return text.charAt(0).toUpperCase()+text.slice(1)
}

export function WorkStats(props: IWorkStats_props){
    console.log(Object.entries(props))
    return <div className="workStats">
        {Object.entries(props).map((pair)=> {
            return <div className="row">
                <div className="key">{capFirst(pair[0])+":"}</div>
                <div className="val">{pair[1]}</div>
            </div>
        })}
    </div>
}