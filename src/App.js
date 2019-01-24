import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Button, Box, Text } from "rebass";
import { PageContainer, Color, Highlight } from "./styleguides";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  openCoinBaseLink() {
    window.open("http://f68z.app.link/8FDncD2aKT", "_blank");
  }

  render() {
    return (
      <PageContainer background="linear-gradient(to bottom, #3f55a1, #2b4185)">
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Box py={5}>
            <Text fontSize={30} fontWeight="bold" color={"white"}>
              Instruction
            </Text>
          </Box>
          <Box py={3}>
            <Button onClick={this.openCoinBaseLink} width={200}>
              Open CoinBase Wallet
            </Button>
          </Box>
          <Box mb={200} />
        </Flex>
      </PageContainer>
    );
  }
}

export default App;
