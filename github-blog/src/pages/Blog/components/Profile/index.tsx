import { Avatar, ContentDiv, DivDescription, DivIcons, DivIconText, GitLink, InnerDiv, NameProfile, ProfileDiv } from "./styles";
import  gitLogo  from '../../../../assets/githublogo.svg'
import { ArrowSquareDownRight, Buildings, GithubLogo, Users } from "phosphor-react";
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'


interface ProfileProps {
    name: string
    login: string
    bio: string
    workAt?: string
    followers: number
    avatar_url: string
    html_url: string
}

export function Profile(){
    const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)

    const loadProfile = useCallback(async () => {
        const response = await api.get("users/FerrazM")

        setProfile(response.data)
    }, [])

    useEffect(() => {
        loadProfile()
    }, [loadProfile])

    return (
        <ProfileDiv>
            <ContentDiv> 
                <InnerDiv>
                    <Avatar/>
                    <NameProfile><h1>{profile.name}</h1></NameProfile> 
                    <GitLink><a href="https://github.com/FerrazM">Github </a></GitLink>
                    
                </InnerDiv>  
                    <DivDescription>
                            Olá sou Matheus Ferraz, desenvolvedor com 3 anos de experiência. Este projeto é um desafio do cuso React da Rocket-Seat 
                    </DivDescription>
                    <DivIcons> <img src={gitLogo} alt="githublogo" /><DivIconText>FerrazM</DivIconText></DivIcons>
            </ContentDiv>       
        </ProfileDiv>
    )
} 