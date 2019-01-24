import React, { Component } from "react";
// import styled from "styled-components";
import { Flex, Button, Box, Text, Image } from "rebass";
import { Highlight } from "../src/styleguides";

import ImgPart1 from "../src/assets/part1.png";
import ImgPart2 from "../src/assets/part2.png";
import ImgPart3 from "../src/assets/part3.jpg";

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
      <Flex justifyContent="center" flexDirection="column" alignItems="center">
        <Text py={4} fontSize={30} fontWeight="bold" color={"black"}>
          Instruction
        </Text>
        <Text fontSize={18} py={2} px={3} textAlign="center">
          1. Install <Highlight>CoinBase Wallet</Highlight> on PlayStore/Google
          Play.
        </Text>
        <Image width={[1 / 3]} src={ImgPart1} my={2} />
        <Text fontSize={18} py={2} px={3} textAlign="center">
          2. Open <Highlight>Dapps</Highlight> Tab on Application.
        </Text>
        <Image width={[1 / 2]} src={ImgPart2} my={2} />
        <Text fontSize={18} py={3} px={3} textAlign="center">
          3. Insert <Highlight>URL</Highlight> which you will receive from
          staffs.
        </Text>
        <Image width={[1 / 2]} src={ImgPart3} my={1} />
        <Box py={3}>
          <Button onClick={this.openCoinBaseLink} width={160}>
            OK Let's claim!
          </Button>
        </Box>
      </Flex>
    );
  }
}

export default App;
