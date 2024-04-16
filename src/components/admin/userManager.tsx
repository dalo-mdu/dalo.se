"use client";

import { User, UserTable, columns } from "./userTable";

const idSymbols = "abcdefghijklmnopqrstuvwxyz123456789";

const randomNames = [
    "Geten",
    "Hästen",
    "Katten",
    "Hunden",
    "Fisken",
    "Fågeln",
    "Grisen",
    "Korven",
    "Kossan",
    "Häxan",
    "Trollet",
    "Vargen",
    "Räven",
    "Haren",
    "Mannen",
    "Kvinnan",
    "Barnet",
    "Gubben",
    "Gumman",
    "Kungen",
    "Drottningen",
    "Prinsen",
    "Prinsessan",
    "Draken",
    "Jätten",
    "Alven",
    "Älgen",
    "Rådjuret",
    "Råttan",
]

const randomEmail = (name: string) => {
    return `${name.toLowerCase()}@dalo.se`
}

const randomProvider = () => {
    return Math.random() > 0.5 ? "discord" : "github"
}

const randomStatus = () => {
    const status = ["pending", "enabled", "disabled"]
    return status[Math.floor(Math.random() * status.length)]
}

const randomId = () => {
    //generate random string
    let str = "";
    for (let index = 0; index < 8; index++) {
        const element = idSymbols[index];
        str+= element;
        
    }
    return str;
}

function UserManager() {


   const users = Array.from({ length: 100 }, (_, index) => {
        return {
            id: randomId(),
            status: randomStatus(),
            email: randomEmail(randomNames[Math.floor(Math.random() * randomNames.length)]),
            provider: randomProvider(),
            name: randomNames[Math.floor(Math.random() * randomNames.length)],
        } as User
    }
    )

  return (
    <>
      <UserTable
        columns={columns}
        data={users}
      ></UserTable>
    </>
  );
}

export default UserManager;
