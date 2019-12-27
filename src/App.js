import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tree, TreeNode } from "react-organizational-chart";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import team from "./data/team";
import PageHeader from "./components/PageHeader";
import SmallDepartment from "./components/SmallDepartment";

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
      <div style={style}>
        <PageHeader />
        <Tree
          lineWidth={"2px"}
          lineColor={"#4A4A4A"}
          lineBorderRadius={"10px"}
          lineHeight={"20px"}
          nodePadding={"5px"}
          label={
            <StyledNode>
              <Card>
                <Card.Header>{this.state.ceo.title}</Card.Header>
                <Card.Body>
                  <p>{this.state.ceo.name}</p>
                </Card.Body>
              </Card>
            </StyledNode>
          }
        >
          <SmallDepartment department={this.state.departments.brand_marketing} />
          <SmallDepartment department={this.state.departments.growth} />

          <SmallDepartment department={this.state.departments.special_projects} />
          <SmallDepartment department={this.state.departments.international_bd} />
        </Tree>
      </div>
    );
  }
}
export default App;
