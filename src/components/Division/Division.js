import React from "react";
import { TreeNode } from "react-organizational-chart";
import { Accordion, Card } from "react-bootstrap";
import styled from "styled-components";

const StyledNode = styled.div`
  display: inline-block;
`;

const Division = props => {
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
      <TreeNode
        label={
          <StyledNode>
            <Card>
              <Card.Header>
                <strong>{props.division.lead.title}</strong>
              </Card.Header>
              <Card.Body>{props.division.lead.name}</Card.Body>
            </Card>
          </StyledNode>
        }
      >
        {props.division.team_members.map(member => {
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
    </TreeNode>
  );
};

export default Division;
