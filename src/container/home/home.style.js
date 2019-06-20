import styled from 'styled-components' ;

const HomeWrapper = styled.div`
    .logo {
        font-size: 2rem ;
        color : #bcc1b8; 
        padding : 1rem ;
        transition : all 0.5s ; 
        :hover {
            font-size : 2.4rem ;
        }
    }

    .side-bar {
        min-height : 100vh ;
    }
    
    .heading-text {
        color : #bcc1b8 ;
        font-size : 2rem ;
    }

    .footer {
        text-align : center ; 
    }
` ;

export default HomeWrapper ; 