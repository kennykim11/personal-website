export function IconButton(props) {
    return <div className="iconOutline" onClick={props.clickHandler}>
        <div className="icon">
            <ion-icon size="large" name={props.iconName}></ion-icon>
        </div>
    </div>
}