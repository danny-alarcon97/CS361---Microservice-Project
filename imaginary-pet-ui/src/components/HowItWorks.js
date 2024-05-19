import React from "react";
import { GiSmallFire } from "react-icons/gi";
import { GiWaterSplash } from "react-icons/gi";
import { GiWhirlwind } from "react-icons/gi";
import { GiStoneSphere } from "react-icons/gi";

function HowItWorks() {
  return (
    <section class="section-how" id="how">
      <div class="container">
        <span class="subheading">How it works</span>
        <h2 class="heading-secondary">Imaginary Pet Tutorial</h2>
      </div>

      <div class="container grid">
        {/* <!-- STEP 01 --> */}
        <div class="step-text-box">
          <p class="step-number" style={{ color: "firebrick" }}>
            01 <GiSmallFire />
          </p>
          <h3 class="heading-tertiary">
            Create A Pet <strong>(IN PROGRESS!)</strong>
          </h3>
          <p className="step-description">
            Create a pet in the{" "}
            <strong>
              <a href="/create">CREATE</a>
            </strong>{" "}
            tab in the Nav bar above, or click on the word create! You will be
            able to choose its name, species, and appearance. You can choose
            from 4 different elements that your pet can originate from:{" "}
            <strong>
              <span style={{ color: "firebrick" }}>fire</span>,
              <span style={{ color: "royalblue" }}> water</span>,
              <span style={{ color: "forestgreen" }}> air</span>,
            </strong>{" "}
            and
            <strong>
              <span style={{ color: "sienna" }}> earth</span>
            </strong>
            ! If pets have already been created, you can also route to the
            create page from the pet page.
          </p>
        </div>

        {/* <!-- STEP 02 --> */}
        <div class="step-text-box">
          <p class="step-number" style={{ color: "royalblue" }}>
            02 <GiWaterSplash />
          </p>
          <h3 class="heading-tertiary">
            Get Those Stats <strong>(IN PROGRESS!)</strong>
          </h3>
          <p class="step-description">
            Once your pet has been created, random stats will be granted to
            them. These stats include:{" "}
            <ul>
              <li>
                <strong>Strength:</strong> Represents the physical power of the
                pet, affecting its ability to perform tasks such as combat or
                physical challenges.
              </li>
              <li>
                <strong>Agility:</strong> Reflects the pet's speed and agility,
                influencing its movement and ability to dodge attacks or
                navigate obstacles.
              </li>
              <li>
                <strong>Intelligence:</strong> Indicates the pet's cognitive
                abilities and problem-solving skills, affecting its ability to
                learn new tricks or solve puzzles.
              </li>
              <li>
                <strong>Stamina:</strong> Represents the pet's endurance and
                energy levels, influencing how long it can engage in activities
                without becoming fatigued.
              </li>
              <li>
                <strong>Health:</strong> Reflects the pet's overall well-being
                and resistance to illness or injury, affecting its longevity and
                ability to withstand damage in battles or adverse conditions.
              </li>
              <li>
                <strong>Charisma:</strong> Indicates the pet's charm and social
                skills, influencing its ability to interact with other pets or
                NPCs and gain allies or followers.
              </li>
              <li>
                <strong>Elemental Affinity:</strong> Represents the pet's
                affinity towards a particular element (e.g., fire, water, air,
                earth), affecting its abilities and strengths in elemental-based
                attacks or environments.
              </li>
              <li>
                <strong>Luck:</strong> Reflects the pet's fortune and chance of
                success in various endeavors, influencing random events or
                outcomes in the game.
              </li>
              <li>
                <strong>Special Abilities:</strong> Include unique abilities or
                powers that are specific to certain types of pets or species,
                adding diversity and strategic depth to the gameplay.
              </li>
            </ul>
          </p>
        </div>

        {/* <!-- STEP 03 --> */}
        <div class="step-text-box">
          <p class="step-number" style={{ color: "forestgreen" }}>
            03 <GiWhirlwind />
          </p>
          <h3 class="heading-tertiary">
            Put Them To The Test Or Just Care For Them!{" "}
            <strong>(IN PROGRESS!)</strong>
          </h3>
          <p class="step-description">
            Test your pet's abilities by engaging in various challenges and
            activities. You can also take care of your pet by feeding or playing
            with it. Click on the{" "}
            <strong>
              <a href="/activities">ACTIVITIES</a>
            </strong>{" "}
            tab or the word to explore available activities.
          </p>
        </div>

        {/* <!-- STEP 04 --> */}
        <div class="step-text-box">
          <p class="step-number" style={{ color: "sienna" }}>
            04 <GiStoneSphere />
          </p>
          <h3 class="heading-tertiary">
            Have Fun And Create All The Pets You Want!{" "}
            <strong>(IN PROGRESS!)</strong>
          </h3>
          <p class="step-description">
            Have fun creating as many pets as you desire! Experiment with
            different combinations in the pet creator to unleash your
            creativity. The pets are generated using an AI image generator,
            offering endless possibilities!
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
