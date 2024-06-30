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
          <h3 class="heading-tertiary">Create A Pet</h3>
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
          <h3 class="heading-tertiary">Choose Those Stats</h3>
          <p class="step-description">
            Once you have decided on your pets basic design, select what stats
            you would like them to have!
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
                <strong>Luck:</strong> Reflects the pet's fortune and chance of
                success in various endeavors, influencing random events or
                outcomes in the game.
              </li>
            </ul>
          </p>
        </div>

        {/* <!-- STEP 03 --> */}
        <div class="step-text-box">
          <p class="step-number" style={{ color: "forestgreen" }}>
            03 <GiWhirlwind />
          </p>
          <h3 class="heading-tertiary">Submit Your Idea</h3>
          <p class="step-description">
            Once pet stat creation is complete, submit your pet to be created!
            The software will send the description you wrote for your pet to an
            AI for it to create your best friend! Wait a few seconds after
            submitting, and then navigate to the{" "}
            <strong>
              <a href="/pets">PETS</a>
            </strong>{" "}
            page to see your creation.
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
            offering endless possibilities! If you are having trouble imaging a
            new friend, feel free to go to the{" "}
            <strong>
              <a href="/random-background">RANDOM PET IDEA</a>
            </strong>{" "}
            link to give you the next idea for your pet!
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
