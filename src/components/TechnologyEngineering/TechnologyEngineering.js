import React from "react";
import { TreeNode } from "react-organizational-chart";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import Division from "../Division";
import Engineering from "../Engineering";

const StyledNode = styled.div`
  display: inline-block;
`;

const TechnologyEngineering = props => {
  return (
    <TreeNode
      label={
        <StyledNode>
          <Card>
            <Card.Header>
              <strong>{props.department.dept_name}</strong>
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
                <strong>{props.department.manager.title}</strong>
              </Card.Header>
              <Card.Body>{props.department.manager.name}</Card.Body>
            </Card>
          </StyledNode>
        }
      >
        <Division division={props.department.divisions.customer_support} />
        <Engineering division={props.department.divisions.engineering} />
        <Division division={props.department.divisions.pre_go_live} />
      </TreeNode>
    </TreeNode>
  );
};

export default TechnologyEngineering;
