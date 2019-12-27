import React from "react";
import { TreeNode } from "react-organizational-chart";
import { Accordion, Card } from "react-bootstrap";
import styled from "styled-components";
import SubDivision from "../SubDivision";

const StyledNode = styled.div`
  display: inline-block;
`;

const Engineering = props => {
  return (
    <TreeNode
      label={
        <StyledNode>
          <Card>
            <Card.Header>
              <strong>{props.division.div_name}</strong>
            </Card.Header>
          </Card>
        </StyledNode>
      }
    >
      <SubDivision subDivision={props.division.sub_divisions.operations} />
      <SubDivision subDivision={props.division.sub_divisions.devOps} />
      <SubDivision subDivision={props.division.sub_divisions.integrations} />
      <SubDivision subDivision={props.division.sub_divisions.qa} />
    </TreeNode>
  );
};

export default Engineering;
