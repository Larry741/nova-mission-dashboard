import React from "react";
import { useMemo } from "react";
import { Appear, Button, Loading, Paragraph, withStyles } from "arwes";
import Clickable from "../components/Clickable";

const styles = (theme) => ({
  fontSize: {
    fontSize: "21px",

    "@media (max-width: 800px)": {
      fontSize: "19px",
    },
    "@media (max-width: 480px)": {
      fontSize: "18px",
    },
  },
  nav: {
    display: "inherit",

    "@media (max-width: 800px)": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    "@media (max-width: 353px)": {
      width: "90vw",
      margin: "0 auto",
      justifyContent: "space-around",
    },
  }
});


const Launch = (props) => {
  const { classes, onNav, ...rest } = props;

  const selectorBody = useMemo(() => {
    if (!props.planets) {
      return <></>
    }

    return props.planets.map((planet) => (
      <option value={planet.kepler_name} key={planet.kepler_name}>
        {planet.kepler_name}
      </option>
    ));
  }, [props.planets]);

  const today = new Date().toISOString().split("T")[0];

  return (
    <Appear id="launch" animate show={props.entered}>
      <Paragraph className={classes.fontSize}>
        Schedule a mission launch for interstellar travel to one of the Kepler
        Exoplanets.
      </Paragraph>
      <Paragraph className={classes.fontSize}>
        Only confirmed planets matching the following criteria are available for
        the earliest scheduled missions:
      </Paragraph>
      <ul>
        <li className={classes.fontSize}>
          Planetary radius &lt; 1.6 times Earth's radius
        </li>
        <li className={classes.fontSize}>
          Effective stellar flux &gt; 0.36 times Earth's value and &lt; 1.11
          times Earth's value
        </li>
      </ul>

      <form
        onSubmit={props.submitLaunch}
        style={{
          display: "inline-grid",
          gridTemplateColumns: "auto auto",
          gridGap: "10px 20px",
        }}
      >
        <label className={classes.fontSize} htmlFor="launch-day">
          Launch Date
        </label>
        <input
          type="date"
          id="launch-day"
          name="launch-day"
          min={today}
          max="2040-12-31"
          defaultValue={today}
        />
        <label className={classes.fontSize} htmlFor="mission-name">
          Mission Name
        </label>
        <input type="text" id="mission-name" name="mission-name" />
        <label className={classes.fontSize} htmlFor="rocket-name">
          Rocket Type
        </label>
        <input
          type="text"
          id="rocket-name"
          name="rocket-name"
          defaultValue="Explorer IS1"
        />
        <label className={classes.fontSize} htmlFor="planets-selector">
          Destination Exoplanet
        </label>
        <select id="planets-selector" name="planets-selector">
          {selectorBody}
        </select>
        <Clickable>
          <Button
            animate
            show={props.entered}
            type="submit"
            layer="success"
            disabled={props.isPendingLaunch}
          >
            Launch Mission ✔
          </Button>
        </Clickable>
        {props.isPendingLaunch && <Loading animate small />}
      </form>
    </Appear>
  );
};

export default withStyles(styles)(Launch);
