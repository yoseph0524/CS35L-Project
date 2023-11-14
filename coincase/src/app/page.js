"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import CoinList from "./coins/page";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import CryptoWalletAnimation from "./components/landingAnimation";

import { Center, Container, HStack, Text } from "@chakra-ui/react";

function Landing() {
  return (
    <div>
      <Image
        src="/gradientBG.svg" // Reference to the SVG file in the public directory
        alt="Visual"
        width={900}
        height={600}
      />
      <Image
        src="/circle.svg" // Reference to the SVG file in the public directory
        alt="Visual"
        width={900}
        height={600}
      />
      <Container centerContent>
        <Text
          bgGradient="linear(to-r, #FF0080, #b742ff)"
          bgClip="text"
          fontSize="8xl"
          fontWeight="bold"
        >
          Coincase
        </Text>
        <HStack spacing={5}>
          <Text
            bgClip="text"
            fontSize="2xl"
            fontWeight="bold"
            style={{ color: "#FF0080" }}
          >
            Buy.
          </Text>
          <Text
            bgClip="text"
            fontSize="2xl"
            fontWeight="bold"
            style={{ color: "#FF0080" }}
          >
            Sell.
          </Text>
          <Text
            bgClip="text"
            fontSize="2xl"
            fontWeight="bold"
            style={{ color: "#FF0080" }}
          >
            Trade.
          </Text>
          <Text
            bgClip="text"
            fontSize="2xl"
            fontWeight="bold"
            style={{ color: "#b742ff" }}
          >
            Crypto.
          </Text>
        </HStack>
      </Container>
      <Link href="/Auth/SignUp">Sign Up</Link>
      <br></br>
      <Link href="/Auth/SignIn">Sign In</Link>
      <br></br>

      <Link href="/Home">Home</Link>

      <CryptoWalletAnimation />
    </div>
  );
}

export default Landing;
