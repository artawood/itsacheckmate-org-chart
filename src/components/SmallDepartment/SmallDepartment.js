import React from "react";
import { TreeNode } from "react-organizational-chart";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledNode = styled.div`
  display: inline-block;
`;

const SmallDepartment = props => {
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
      {props.department.team_members.map(member => {
        return (
          <TreeNode
            label={
              <StyledNode>
                <Card>
                  <Card.Header>
                    <strong>{member.title}</strong>
                  </Card.Header>
                  <Card.Body>
                    <p>{member.name}</p>
                  </Card.Body>
                </Card>
              </StyledNode>
            }
          />
        );
      })}
    </TreeNode>
  );
};

export default SmallDepartment;
