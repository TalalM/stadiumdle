import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Stadiumdle } from "../Stadiumdle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";
import { Twemoji } from "@teuteuf/react-emoji-render";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="How to play" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          Guess the <Stadiumdle /> in 6 guesses.
        </div>
        <div>You get the picture of a football stadium, and you have to find the city it's in. Each guess must be a valid city.</div>
        <div>
          After each guess, you will have the distance, the direction and the
          proximity from your guess and the target city.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Examples</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Stockholm",
                direction: "SW",
                distance: 2_559_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Your guess <span className="uppercase font-bold">Stockholm</span> is{" "}
            {formatDistance(2_559_000, settingsData.distanceUnit)} away from the
            target city, the target city is in the South-West direction
            and you have only a 61% of proximity because it&apos;s quite far
            away!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Paris",
                direction: "S",
                distance: 1_062_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Your second guess{" "}
            <span className="uppercase font-bold">Paris</span> is getting
            closer! {formatDistance(1_062_000, settingsData.distanceUnit)} away,
            South direction and 84%!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Valencia",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Next guess, <span className="uppercase font-bold">Valencia</span>,
            it&apos;s the city to guess! Congrats!{" "}
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        A new <Stadiumdle /> will be available every day!
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          <Stadiumdle /> has no FAQ but if you have any question, you can contact me directly on {" "}
          <a
                  className="underline"
                  href="https://twitter.com/talalmazroui"
                  target="_blank"
                  rel="noopener noreferrer"
          >
            @talalmazroui
          </a>.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Stadiumdle /> is <b>heavily</b> inspired by{" "}
        <a
          className="underline"
          href="http://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Worldle
        </a>{" "} created by {" "}
        <a
          className="underline"
          href="https://twitter.com/teuteuf"
          target="_blank"
          rel="noopener noreferrer"
        >
          @teuteuf
        </a>.
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          Made by{" "}
          <a
            className="underline"
            href="https://twitter.com/talalmazroui"
            target="_blank"
            rel="noopener noreferrer"
          >
            @talalmazroui
          </a>{" "}
          - (
          <a
            className="underline"
            href="https://github.com/TalalM/stadiumdle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>
          )
        </div>
        <div>
          You can check my other projects here:{" "}
          <a
            className="underline"
            href="https://www.countrydle.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Countrydle
          </a>, {" "}
          <a
            className="underline"
            href="https://www.flagdle.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flagdle
          </a>
        </div>
        <div>
          Want to support?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/elpastoristo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twemoji
              text="Buy me a coffee! ☕"
              options={{ className: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}
