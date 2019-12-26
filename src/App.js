import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tree, TreeNode } from "react-organizational-chart";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import team from "./data/team";

const StyledNode = styled.div`
  display: inline-block;
`;

function App() {
  return (
    <Tree
      lineWidth={"1px"}
      lineColor={"#4A4A4A"}
      lineBorderRadius={"10px"}
      lineHeight={"20px"}
      nodePadding={"5px"}
      label={
        <StyledNode>
          <Card>
            <Card.Header>{team.ceo.title}</Card.Header>
            <Card.Body>
              <p>{team.ceo.name}</p>
            </Card.Body>
          </Card>
        </StyledNode>
      }
    >
      <TreeNode
        label={
          <StyledNode>
            <Card>
              <Card.Header>{team.departments.brand_marketing.dept_name}</Card.Header>
            </Card>
          </StyledNode>
        }
      />
      <TreeNode
        label={
          <StyledNode>
            <Card>
              <Card.Header>{team.departments.growth.dept_name}</Card.Header>
            </Card>
          </StyledNode>
        }
      >
        {team.departments.growth.team.map(person => {
          return (
            <TreeNode
              label={
                <StyledNode>
                  <Card>
                    <Card.Header>{person.title}</Card.Header>
                    <Card.Body>
                      <p>{person.name}</p>
                    </Card.Body>
                  </Card>
                </StyledNode>
              }
            />
          );
        })}
      </TreeNode>
      <TreeNode
        label={
          <StyledNode>
            <Card>
              <Card.Header>{team.departments.technology_engineering.dept_name}</Card.Header>
            </Card>
          </StyledNode>
        }
      >
        <TreeNode
          label={
            <StyledNode>
              <Card>
                <Card.Header>{team.departments.technology_engineering.lead.title}</Card.Header>
                <Card.Body>
                  <p>{team.departments.technology_engineering.lead.name}</p>
                </Card.Body>
              </Card>
            </StyledNode>
          }
        >
          {team.departments.technology_engineering.divisions.map(div => {
            return (
              <TreeNode
                label={
                  <StyledNode>
                    <Card>
                      <Card.Header>{div.div_name}</Card.Header>
                    </Card>
                  </StyledNode>
                }
              >
                <TreeNode
                  label={
                    <StyledNode>
                      <Card>
                        <Card.Header>{div.lead.title}</Card.Header>
                        <Card.Body>
                          <p>{div.lead.name}</p>
                        </Card.Body>
                      </Card>
                    </StyledNode>
                  }
                >
                  {div.team.map(person => {
                    return (
                      <TreeNode
                        label={
                          <StyledNode>
                            <Card>
                              <Card.Header>{person.title}</Card.Header>
                              <Card.Body>
                                <p>{person.name}</p>
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
          })}
        </TreeNode>
      </TreeNode>
      <TreeNode
        label={
          <StyledNode>
            <Card>
              <Card.Header>{team.departments.special_projects.dept_name}</Card.Header>
            </Card>
          </StyledNode>
        }
      />
    </Tree>
  );
}

export default App;
