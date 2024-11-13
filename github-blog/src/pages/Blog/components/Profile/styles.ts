import styled from "styled-components";
import profileimg from '../../../../assets/profileimage.png'

export const ProfileDiv = styled.div`
    align-items: center;
    margin: 0 auto;
    width: 50%;
    border-radius: 8px;
    border: none;
    background: ${(props) => props.theme['base-profile']};
    box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;

export const ContentDiv = styled.div`
    margin-top: -6rem;
    padding: 2rem;
`;

export const InnerDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.img`
    background-image: url(${profileimg});
    border-radius: 8px;
    background-size: cover;
    width: 148px;
    height: 148px;
`;

export const NameProfile = styled.div`
    font-size: large;
    margin-left: 2.5rem;
    display: block; 
    margin-top: 0.5rem; 
    align-self: flex-start;
`;

export const GitLink = styled.div`
    display: inline-block;
    font-size: 16px;
    margin-left: auto;
    margin-top: 0.5rem;
    align-self: flex-start;

    a {
        cursor: pointer;
        text-decoration: none;
        color: ${props => props.theme['blue']};
        border-bottom: solid 1.5px transparent;
        transition: border-bottom 0.5s ease-in-out;
    }

    a:hover {
        border-bottom: solid 1.5px;
        margin-top: 1px;
    }
`;

export const DivDescription = styled.text`
    display: flex;
    margin-left: 12rem;
    margin-top: -5rem;
    align-self: flex-start;
`;

export const DivIcons = styled.div`
    display: flex;
    margin-left: 12rem;
    margin-top: 2rem;
`;

export const DivIconText = styled.text`
    display: flex;
    margin-left: 0.5rem;
    margin-top: 0.1rem;
`;


