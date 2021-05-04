import Layout from '../components/Layout'
import tw from 'twin.macro'
import styled from "styled-components"
import { ReactNode } from "react"

const HeroBackground = styled.div`
  ${tw`py-16 bg-green-500`}
  background-image: linear-gradient(120deg,#155799,#159957)
`
const HeroContent = styled.div`
  ${tw`text-center text-white`}
`
const Avatar = styled.img`
  ${tw`rounded-full mx-auto w-24 mb-4`}
`
const Title = styled.h1`
  ${tw`text-5xl mb-2`}
`
const Description = styled.p`
  ${tw`text-2xl leading-snug text-center max-w-xl mx-auto`}
`

type Props = {
  children?: ReactNode
}
const Hero = ({ children }: Props) => (
  <HeroBackground>
    <HeroContent>
      {children}
    </HeroContent>
  </HeroBackground>
)

const IndexPage = () => (
  <Layout title="Home | next.js + typescript example">
    <Hero>
      <Avatar alt="takoba" src="/icon.jpg" />
      <Title>takoba</Title>
      <Description>Software Engineer OR UX Designer.</Description>
    </Hero>
  </Layout>
)

export default IndexPage
