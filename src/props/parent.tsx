import {ChildAsFC} from './child';

const Parent = () => {
    return <ChildAsFC color="black" onClick={() => console.log("clicked")}>
        sdsdsd
    </ChildAsFC>
}

export default Parent;