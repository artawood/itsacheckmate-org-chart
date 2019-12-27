import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tree, TreeNode } from "react-organizational-chart";
import { Card, Container } from "react-bootstrap";
import styled from "styled-components";
import team from "./data/team";
import PageHeader from "./components/PageHeader";
import SmallDepartment from "./components/SmallDepartment";
import TechnologyEngineering from "./components/TechnologyEngineering";

const StyledNode = styled.div`
  display: inline-block;
`;

const style = {
  fontSize: "10px"
};

class App extends React.Component {
  state = team;
  render() {
    return (
      <Container fluid style={style}>
        <PageHeader />
        <Tree
          lineWidth={"1px"}
          lineColor={"#4A4A4A"}
          lineBorderRadius={"10px"}
          lineHeight={"20px"}
          nodePadding={"5px"}
          label={
            <StyledNode>
              <Card>
                <Card.Header>
                  <strong>{this.state.ceo.title}</strong>
                </Card.Header>
                <Card.Body>
                  <p>{this.state.ceo.name}</p>
                </Card.Body>
              </Card>
            </StyledNode>
          }
        >
          <TechnologyEngineering department={this.state.departments.technology_engineering} />
          <SmallDepartment department={this.state.departments.brand_marketing} />
          <SmallDepartment department={this.state.departments.growth} />
          <SmallDepartment department={this.state.departments.special_projects} />
          <SmallDepartment department={this.state.departments.international_bd} />
          <SmallDepartment department={this.state.departments.administration} />
        </Tree>
      </Container>
    );
  }
}
export default App;
