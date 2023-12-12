import styled from "styled-components";

export const Div = styled.div`
    width: 800px;
    height: auto;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: relative;

    @media (max-width: 768px){
        width: 600px;
        height: auto;
    }

    @media (max-width: 425px){
        flex-wrap: wrap;
        width: 80%;
    }

    .image{
        position: relative;
    }

    .image img:nth-child(1){
        width: auto;
        height: auto; 
    }

    @media (max-width: 768px){
        .image img:nth-child(1){
            width: 300px;
        }
    }

    @media (max-width: 425px){
        .image img:nth-child(1){
            width: 100%;
        }
    }

    .image img:nth-child(2){
        position: absolute;
        bottom: -70px;
        left: -100px;
        z-index: 999;
    }

    @media (max-width: 768px) {
        .image img:nth-child(2){
            width: 300px;
            height: auto;
            bottom: -78px;
            left: -78px;
        }
    }

    @media (max-width: 425px){
        .image img:nth-child(2){
            width: 290px;
            left: 120px;
            top: 60%;
            left: 17%;
            transform: translate(0%, -50%);
        }
    }

    @media (max-width: 375px){
        .image img:nth-child(2){
            width: 220px;
            left: 120px;
            top: 60%;
            left: 20%;
            transform: translate(0%, -50%);
        }
    }

    .content{
        width: 400px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        gap: 16px;
        padding: 0px 54px;
        box-sizing: border-box;
    }

    @media (max-width: 425px){
        .content{
            padding: 32px 54px;
        }

        .content h2{
            margin: 16px 0px 8px 0px;
        }
    }

    @media (max-width: 375px){
        .content {
            width: 100%;
            padding: 32px 16px;
        }
    }

    form{
        width: 100%;
    }

    .filter{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-around;
        align-items: center;
        color: var(--color-font);
        font-size: 14px;
        padding: 0px 16px;
    }

    @media (max-width: 425px){
        .filter{
            margin: 16px 0px;
        }
    }

    .icon-filter{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: 700;
        gap: 8px;
    }

    #name, #population {
        cursor: pointer;
        font-weight: 400;
    }

    #name {
        font-weight: 700;
    }

    .icon-filter:first{
        font-weight: 700;
    }

    .filter svg{
        font-size: 15px;
    }
`