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

export function InfosFr({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="Comment jouer" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          {" "}
          Devinez le <Stadiumdle /> en 6 essais.
        </div>
        <div>Vous avez la photo d'un stade de football et vous devez deviner la ville dans laquelle il est situé. Chaque essai doit être une ville valide.<br/>
          Après chaque essai, vous aurez la distance, la direction et la
          proximité entre votre essai et la ville cible.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Exemples</div>
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
            Votre essai <span className="uppercase font-bold">Stockholm</span> est à{" "}
            {formatDistance(2_559_000, settingsData.distanceUnit)} de la ville
            cible, la ville cible se trouve dans la direction Sud-Ouest et vous
            avez une proximité de seulement 61% car votre essai est plutôt
            éloigné !
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
            Votre second essai{" "}
            <span className="uppercase font-bold">Paris</span> est plus
            proche ! La bonne réponse est à{" "}
            {formatDistance(1_062_000, settingsData.distanceUnit)}, au Sud
            et la proximité est de 84%!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Valence",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Prochain essai, <span className="uppercase font-bold">Valence</span>,
            c&apos;est la ville à deviner ! Bien joué !{" "}
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Un nouveau <Stadiumdle /> sera disponible chaque jour !
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          <Stadiumdle /> n'a pas de FAQ mais vous si vous avez la moindre question, vous pouvez directement me contacter sur {" "}
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
        <Stadiumdle /> est <b>fortement</b> inspiré de{" "}
        <a
          className="underline"
          href="http://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >Worldle</a>{" "} créé par {" "}
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
          Fait par{" "}
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
            code source
          </a>
          )
        </div>
        <div>
          Vous pouvez aller voir mes autres projets ici :{" "}
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
          Vous voulez me soutenir ?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/elpastoristo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twemoji
              text="Offrez moi un café ! ☕"
              options={{ className: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}
