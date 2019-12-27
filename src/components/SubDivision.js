import React from "react";
import { TreeNode } from "react-organizational-chart";
import { Accordion, Card } from "react-bootstrap";
import styled from "styled-components";

const StyledNode = styled.div`
  display: inline-block;
`;

const SubDivision = props => {
  return (
    <TreeNode
      label={
        <StyledNode>
          <Card>
            <Card.Header>
              <strong>{props.subDivision.name}</strong>
            </Card.Header>
          </Card>
        </StyledNode>
      }
    >
      <TreeNode
        label={
          <StyledNode>
            <Card>
              <Card.Header>
                <strong>{props.subDivision.lead.title}</strong>
              </Card.Header>
              <Card.Body>
                <p>{props.subDivision.lead.name}</p>
              </Card.Body>
            </Card>
          </StyledNode>
        }
      ></TreeNode>
    </TreeNode>
  );
};

export default SubDivision;
