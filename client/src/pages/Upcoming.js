import React from "react";
import { useMemo } from "react";
import { withStyles, Appear, Link, Paragraph, Table, Words } from "arwes";

import Clickable from "../components/Clickable";

const styles = () => ({
  link: {
    color: "red",
    textDecoration: "none",
  },
  fontSize: {
    fontSize: "21px",

    "@media (max-width: 800px)": {
      fontSize: "19px",
    },
    "@media (max-width: 480px)": {
      fontSize: "18px",
    },
  },
});

const Upcoming = (props) => {
  const { entered, launches, classes, abortLaunch } = props;

  const tableBody = useMemo(() => {
    if (!launches) {
      return <></>
    }

    return launches
      ?.filter((launch) => launch.upcoming)
      .map((launch) => {
        return (
          <tr key={String(launch.flightNumber)}>
            <td>
              <Clickable style={{ color: "red" }}>
                <Link
                  className={classes.link}
                  onClick={() => abortLaunch(launch.flightNumber)}
                >
                  ✖
                </Link>
              </Clickable>
            </td>
            <td>{launch.flightNumber}</td>
            <td>{new Date(launch.launchDate).toDateString()}</td>
            <td>{launch.mission}</td>
            <td>{launch.rocketName}</td>
            <td>{launch.target}</td>
          </tr>
        );
      });
    }, [launches, abortLaunch, classes.link]);

  return (
    <Appear id="upcoming" animate show={entered}>
      <Paragraph className={classes.fontSize}>
        Upcoming missions including both SpaceX launches and newly scheduled
        Zero to Mastery rockets.
      </Paragraph>
      <Words className={classes.fontSize} animate>
        Warning! Clicking on the ✖ aborts the mission.
      </Words>
      <Table animate show={entered}>
        <table style={{ tableLayout: "fixed", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: "3rem" }}></th>
              <th style={{ width: "3rem" }}>No.</th>
              <th style={{ width: "10rem" }}>Date</th>
              <th style={{ width: "10rem" }}>Mission</th>
              <th style={{ width: "10rem" }}>Rocket</th>
              <th style={{ width: "10rem" }}>Destination</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </Table>
    </Appear>
  );
};

export default withStyles(styles)(Upcoming);
