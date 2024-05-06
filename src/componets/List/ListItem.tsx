import { useState } from "react";

interface Props {
    data: any[],
    setData: () => void
}
const ListItem : React.FC<Props> = ({data}) => {
    const [loading, setLoading] = useState(false);
    return(
        <></>
    )
}

export default ListItem;