import styled from 'styled-components';

const RedCont = styled.div`
background-color:${props=>props.cl};
color:${props=>props.text_cl};
`;

const FontSize = styled.h1`
font-size: 3em`;

//styled.h1 , styled.img etc.

export default function ImgCard({
    img="/dog.jpeg",
    h1="This is a dog",
    bg="red",
    tcl="#FFF",
    children=null
}){

    // const mystyle = {
    //     backgroundColor:"turquoise"
    // }

    //<div style={{backgroundColor: "turquoise"}}> 
    // replace <div> with <RedCont>
    return <RedCont cl={bg} text_cl={tcl}> 
        {children}
        <img src={img} />
        <FontSize>{h1}</FontSize>
    </RedCont>
}