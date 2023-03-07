import React, { useEffect, useState } from "react";
import {
  Nav,
  NavLink,
  NavMenu,
} from "../../../components/Navbar/NavbarElements";

let Enum = {
  T8_HEAD_CLOTH_SET1: "Колпак ученого (старейшина)",
  T8_HEAD_CLOTH_SET2: "Колпак клирика (старейшина)",
  T8_HEAD_CLOTH_SET3: "Колпак чародея (старейшина)",
  T8_ARMOR_CLOTH_SET1: "Мантия ученого (старейшина)",
  T8_ARMOR_CLOTH_SET2: "Мантия клирика (старейшина)",
  T8_ARMOR_CLOTH_SET3: "Мантия чародея (старейшина)",
  T8_SHOES_CLOTH_SET1: "Сандалии ученого (старейшина)",
  T8_SHOES_CLOTH_SET2: "Сандалии клирика (старейшина)",
  T8_SHOES_CLOTH_SET3: "Сандалии чародея (старейшина)",
  T8_MAIN_ARCANESTAFF: "Мистический посох (старейшина)",
  T8_2H_ARCANESTAFF: "Большой мистический посох (старейшина)",
  T8_2H_ENIGMATICSTAFF: "Загадочный посох (старейшина)",
  T8_MAIN_CURSEDSTAFF: "Проклятый посох (старейшина)",
  T8_2H_CURSEDSTAFF: "Большой проклятый посох (старейшина)",
  T8_2H_DEMONICSTAFF: "Демонический посох (старейшина)",
  T8_MAIN_FIRESTAFF: "Огненный посох (старейшина)",
  T8_2H_FIRESTAFF: "Большой огненный посох (старейшина)",
  T8_2H_INFERNOSTAFF: "Адский посох (старейшина)",
  T8_MAIN_FROSTSTAFF: "Морозный посох (старейшина)",
  T8_2H_FROSTSTAFF: "Большой морозный посох (старейшина)",
  T8_2H_GLACIALSTAFF: "Ледяной посох (старейшина)",
  T8_MAIN_HOLYSTAFF: "Священный посох (старейшина)",
  T8_2H_HOLYSTAFF: "Большой священный посох (старейшина)",
  T8_2H_DIVINESTAFF: "Божественный посох (старейшина)",
  T8_OFF_BOOK: "Книга заклинаний (старейшина)",
  T8_HEAD_LEATHER_SET1: "Капюшон наемника (знатока)",
  T8_HEAD_LEATHER_SET2: "Капюшон охотника (старейшина)",
  T8_HEAD_LEATHER_SET3: "Капюшон убийцы (старейшина)",
  T8_ARMOR_LEATHER_SET1: "Куртка наемника (старейшина)",
  T8_ARMOR_LEATHER_SET2: "Куртка охотника (старейшина)",
  T8_ARMOR_LEATHER_SET3: "Куртка убийцы (старейшина)",
  T8_SHOES_LEATHER_SET1: "Ботинки наемника (старейшина)",
  T8_SHOES_LEATHER_SET2: "Ботинки охотника (старейшина)",
  T8_SHOES_LEATHER_SET3: "Ботинки убийцы (старейшина)",
  T8_2H_BOW: "Лук (старейшина)",
  T8_2H_WARBOW: "Боевой лук (старейшина)",
  T8_2H_LONGBOW: "Длинный лук (старейшина)",
  T8_MAIN_SPEAR: "Копье (старейшина)",
  T8_2H_SPEAR: "Пика (старейшина)",
  T8_2H_GLAIVE: "Глефа (старейшина)",
  T8_MAIN_NATURESTAFF: "Древесный посох (старейшина)",
  T8_2H_NATURESTAFF: "Большой древесный посох (старейшина)",
  T8_2H_WILDSTAFF: "Дикий посох (старейшина)",
  T8_MAIN_DAGGER: "Кинжал (старейшина)",
  T8_2H_DAGGERPAIR: "Парные кинжалы (старейшина)",
  T8_2H_CLAWPAIR: "Когти (старейшина)",
  T8_2H_QUARTERSTAFF: "Боевой шест (старейшина)",
  T8_2H_IRONCLADEDSTAFF: "Железный посох (старейшина)",
  T8_2H_DOUBLEBLADEDSTAFF: "Острый шест (старейшина)",
  T8_OFF_TORCH: "Факел (старейшина)",
  T8_HEAD_PLATE_SET1: "Шлем солдата (старейшина)",
  T8_HEAD_PLATE_SET2: "Шлем рыцаря (старейшина)",
  T8_HEAD_PLATE_SET3: "Шлем хранителя (старейшина)",
  T8_ARMOR_PLATE_SET1: "Броня солдата (старейшина)",
  T8_ARMOR_PLATE_SET2: "Броня рыцаря (старейшина)",
  T8_ARMOR_PLATE_SET3: "Броня хранителя (старейшина)",
  T8_SHOES_PLATE_SET1: "Сапоги солдата (старейшина)",
  T8_SHOES_PLATE_SET2: "Сапоги рыцаря (старейшина)",
  T8_SHOES_PLATE_SET3: "Сапоги хранителя (старейшина)",
  T8_MAIN_SWORD: "Палаш (старейшина)",
  T8_2H_CLAYMORE: "Клеймор (старейшина)",
  T8_2H_DUALSWORD: "Парные мечи (старейшина)",
  T8_MAIN_AXE: "Боевой топор (старейшина)",
  T8_2H_AXE: "Большой топор (старейшина)",
  T8_2H_HALBERD: "Алебарда (старейшина)",
  T8_2H_MACE: "Булава (старейшина)",
  T8_MAIN_MACE: "Тяжелая булава (старейшина)",
  T8_2H_FLAIL: "Моргенштерн (старейшина)",
  T8_2H_TOOL_SIEGEHAMMER: "Молот (старейшина)",
  T8_2H_POLEHAMMER: "Чекан (старейшина)",
  T8_2H_HAMMER: "Большой молот (старейшина)",
  T8_2H_CROSSBOW: "Арбалет (старейшина)",
  T8_2H_CROSSBOWLARGE: "Тяжелый арбалет (старейшина)",
  T8_MAIN_1HCROSSBOW: "Легкий арбалет (старейшина)",
  T8_OFF_SHIELD: "Щит (старейшина)",
  T8_BAG: "Сумка (старейшина)",
  T8_CAPE: "Плащ (старейшина)",
};

Enum = Object.fromEntries(
  Object.keys(Enum).map((key) => [key + "@1", Enum[key]])
);

function checkTime(firstDate, secondDate) {
  let getDate = (string) =>
    new Date(0, 0, 0, string.split(":")[0], string.split(":")[1]);
  let different = getDate(secondDate) - getDate(firstDate);

  let hours = Math.floor((different % 86400000) / 3600000);
  let minutes = Math.round(((different % 86400000) % 3600000) / 60000);
  let result = hours + ":" + minutes;
  return result;
}

function checkTimeBD(Other) {
  let timeTamp = Other.split("T")[1].split(":");
  let globalTamp = new Date().toUTCString().split(" ")[4].split(":");

  if (Other !== 0) {
    let checkTimes = checkTime(
      `${timeTamp[0]}:${timeTamp[1]}`,
      `${globalTamp[0]}:${globalTamp[1]}`
    );
    if (!checkTimes.match("-")) return checkTimes;
  }
}

function App() {
  const [item, setItem] = useState([]);

  function addFitch() {
    fetch(
      `https://www.albion-online-data.com/api/v2/stats/prices/T8_HEAD_CLOTH_SET1@1,T8_HEAD_CLOTH_SET2@1,T8_HEAD_CLOTH_SET3@1,T8_ARMOR_CLOTH_SET1@1,T8_ARMOR_CLOTH_SET2@1,T8_ARMOR_CLOTH_SET3@1,T8_SHOES_CLOTH_SET1@1,T8_SHOES_CLOTH_SET2@1,T8_SHOES_CLOTH_SET3@1,T8_MAIN_ARCANESTAFF@1,T8_2H_ARCANESTAFF@1,T8_2H_ENIGMATICSTAFF@1,T8_MAIN_CURSEDSTAFF@1,T8_2H_CURSEDSTAFF@1,T8_2H_DEMONICSTAFF@1,T8_MAIN_FIRESTAFF@1,T8_2H_FIRESTAFF@1,T8_2H_INFERNOSTAFF@1,T8_2H_FROSTSTAFF@1,T8_2H_FROSTSTAFF@1,T8_2H_GLACIALSTAFF@1,T8_MAIN_HOLYSTAFF@1,T8_2H_HOLYSTAFF@1,T8_2H_DIVINESTAFF@1,T8_OFF_BOOK@1,T8_HEAD_LEATHER_SET2@1,T8_HEAD_LEATHER_SET3@1,T8_ARMOR_LEATHER_SET1@1,T8_ARMOR_LEATHER_SET2@1,T8_ARMOR_LEATHER_SET3@1,T8_SHOES_LEATHER_SET1@1,T8_SHOES_LEATHER_SET2@1,T8_SHOES_LEATHER_SET3@1,T8_2H_BOW@1,T8_2H_WARBOW@1,T8_2H_LONGBOW@1,T8_MAIN_SPEAR@1,T8_2H_SPEAR@1,T8_2H_GLAIVE@1,T8_MAIN_NATURESTAFF@1,T8_2H_NATURESTAFF@1,T8_2H_WILDSTAFF@1,T8_MAIN_DAGGER@1,T8_2H_DAGGERPAIR@1,T8_2H_CLAWPAIR@1,T8_2H_QUARTERSTAFF@1,T8_2H_IRONCLADEDSTAFF@1,T8_2H_DOUBLEBLADEDSTAFF@1,T8_OFF_TORCH@1,T8_HEAD_PLATE_SET1@1,T8_HEAD_PLATE_SET2@1,T8_HEAD_PLATE_SET3@1,T8_ARMOR_PLATE_SET1@1,T8_ARMOR_PLATE_SET2@1,T8_ARMOR_PLATE_SET3@1,T8_SHOES_PLATE_SET1@1,T8_SHOES_PLATE_SET2@1,T8_SHOES_PLATE_SET3@1,T8_MAIN_SWORD@1,T8_2H_CLAYMORE@1,T8_2H_DUALSWORD@1,T8_MAIN_AXE@1,T8_2H_AXE@1,T8_2H_HALBERD@1,T8_2H_MACE@1,T8_MAIN_MACE@1,T8_2H_FLAIL@1,T8_2H_TOOL_SIEGEHAMMER@1,T8_2H_POLEHAMMER@1,T8_2H_HAMMER@1,T8_2H_CROSSBOW@1,T8_2H_CROSSBOWLARGE@1,T8_MAIN_1HCROSSBOW@1,T8_OFF_SHIELD@1,T8_BAG@1,T8_CAPE@1?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch&qualities=${qualities}`
    )
      .then((res) => res.json())
      .then((json) => analysisJSON(json));
  }

  useEffect(() => {
    addFitch();
  }, []);

  function analysisJSON(data) {
    let array = [];
    data.map((data) => {
      const objectReadyJSON = {};

      for (let i = 0; i < array.length; i++) {
        if (array[i].item_id === data.item_id) {
          if (data.city === "Black Market")
            array[i].BlackMarket = {
              buy: data.buy_price_min,
              sell: data.sell_price_min,
              sellDate: data.sell_price_min_date,
            };
          if (data.city === "Bridgewatch")
            array[i].Bridgewatch = {
              buy: data.buy_price_min,
              sell: data.sell_price_min,
              sellDate: data.sell_price_min_date,
            };
          if (data.city === "Martlock")
            array[i].Martlock = {
              buy: data.buy_price_min,
              sell: data.sell_price_min,
              sellDate: data.sell_price_min_date,
            };
          if (data.city === "Thetford")
            array[i].Thetford = {
              buy: data.buy_price_min,
              sell: data.sell_price_min,
              sellDate: data.sell_price_min_date,
            };
          if (data.city === "Fort Sterling")
            array[i].FortSterling = {
              buy: data.buy_price_min,
              sell: data.sell_price_min,
              sellDate: data.sell_price_min_date,
            };
          if (data.city === "Lymhurst")
            array[i].Lymhurst = {
              buy: data.buy_price_min,
              sell: data.sell_price_min,
              sellDate: data.sell_price_min_date,
            };
          if (data.city === "Caerleon")
            array[i].Caerleon = {
              buy: data.buy_price_min,
              sell: data.sell_price_min,
              sellDate: data.sell_price_min_date,
            };
          return false;
        }
      }
      objectReadyJSON.item_id = data.item_id;
      if (data.city === "Black Market")
        objectReadyJSON.BlackMarket = {
          buy: data.buy_price_min,
          sell: data.sell_price_min,
          sellDate: data.sell_price_min_date,
        };
      else objectReadyJSON.BlackMarket = { buy: 0, sell: 0 };
      if (data.city === "Bridgewatch")
        objectReadyJSON.Bridgewatch = {
          buy: data.buy_price_min,
          sell: data.sell_price_min,
          sellDate: data.sell_price_min_date,
        };
      else objectReadyJSON.Bridgewatch = { buy: 0, sell: 0 };
      if (data.city === "Martlock")
        objectReadyJSON.Martlock = {
          buy: data.buy_price_min,
          sell: data.sell_price_min,
          sellDate: data.sell_price_min_date,
        };
      else objectReadyJSON.Martlock = { buy: 0, sell: 0 };
      if (data.city === "Thetford")
        objectReadyJSON.Thetford = {
          buy: data.buy_price_min,
          sell: data.sell_price_min,
          sellDate: data.sell_price_min_date,
        };
      else objectReadyJSON.Thetford = { buy: 0, sell: 0 };
      if (data.city === "FortSterling")
        objectReadyJSON.FortSterling = {
          buy: data.buy_price_min,
          sell: data.sell_price_min,
          sellDate: data.sell_price_min_date,
        };
      else objectReadyJSON.FortSterling = { buy: 0, sell: 0 };
      if (data.city === "Lymhurst")
        objectReadyJSON.Lymhurst = {
          buy: data.buy_price_min,
          sell: data.sell_price_min,
          sellDate: data.sell_price_min_date,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      if (data.city === "Caerleon")
        objectReadyJSON.Caerleon = {
          buy: data.buy_price_min,
          sell: data.sell_price_min,
          sellDate: data.sell_price_min_date,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      array.push(objectReadyJSON);
    });

    setItem(array);
  }

  function profit(BM, Other) {
    let profitColor;
    let profitStart = Math.ceil(Math.round((BM / 100) * 89.5));
    let profit = Math.ceil(profitStart - Other);
    let profitProc = Math.ceil((profit / profitStart) * 100);
    let profitColorProc;
    if (profit < 0) {
      profitColor = "#db0000";
    } else profitColor = "#00e500";
    if (profitProc > 40 && profitProc < 60) {
      profitColorProc = "#ffe000";
    } else if (profitProc >= 60) {
      profitColorProc = "#00c4ff";
    } else profitColorProc = "#e98282";
    return (
      <h>
        <font style={{ color: profitColor }}>{profit}</font> |{" "}
        <font style={{ color: profitColorProc }}>{profitProc}%</font>
      </h>
    );
  }

  const qualities = 3;

  return (
    <>
      <div>
        <Nav>
          <NavMenu>
            <h1>Т 8.1 - Качество: выдающиеся</h1>
            <NavLink to="/eightOne" activeStyle>
              1
            </NavLink>
            <NavLink to="/eightOne2" activeStyle>
              2
            </NavLink>
            <NavLink to="/eightOne3" activeStyle>
              3
            </NavLink>
            <NavLink to="/eightOne4" activeStyle>
              4
            </NavLink>
            <NavLink to="/eightOne5" activeStyle>
              5
            </NavLink>
          </NavMenu>
        </Nav>
      </div>
      <table
        style={{
          margin: "auto",
          backgroundImage:
            "linear-gradient(rgba(43,43,43,0.8), rgba(43,43,43,0.8))",
        }}
      >
        <thead>
          <tr style={{ height: "30px" }}>
            <th style={{ width: "30px" }}>icon</th>
            <th style={{ width: "250px" }}>Наименование</th>
            <th style={{ width: "65px" }}>BlackMarket</th>
            <th style={{ width: "60px" }}>-%</th>
            <th style={{ width: "65px" }}>lastUpdate</th>

            <th
              style={{
                width: "65px",
                backgroundColor: "rgb(56, 211, 215, 10%)",
              }}
            >
              Bridgewatch
            </th>
            <th
              style={{
                width: "60px",
                backgroundColor: "rgb(56, 211, 215, 10%)",
              }}
            >
              profit
            </th>
            <th
              style={{
                width: "65px",
                backgroundColor: "rgb(56, 211, 215, 10%)",
              }}
            >
              lastUpdate
            </th>

            <th
              style={{ width: "65px", backgroundColor: "rgb(255, 13, 0, 10%)" }}
            >
              Martlock
            </th>
            <th
              style={{ width: "60px", backgroundColor: "rgb(255, 13, 0, 10%)" }}
            >
              profit
            </th>
            <th
              style={{ width: "65px", backgroundColor: "rgb(255, 13, 0, 10%)" }}
            >
              lastUpdate
            </th>

            <th
              style={{
                width: "65px",
                backgroundColor: "rgb(255, 255, 128, 10%)",
              }}
            >
              Thetford
            </th>
            <th
              style={{
                width: "60px",
                backgroundColor: "rgb(255, 255, 128, 10%)",
              }}
            >
              profit
            </th>
            <th
              style={{
                width: "65px",
                backgroundColor: "rgb(255, 255, 128, 10%)",
              }}
            >
              lastUpdate
            </th>

            <th
              style={{
                width: "65px",
                backgroundColor: "rgb(249, 230 ,217, 10%)",
              }}
            >
              Fort Sterling
            </th>
            <th
              style={{
                width: "60px",
                backgroundColor: "rgb(249, 230 ,217, 10%)",
              }}
            >
              profit
            </th>
            <th
              style={{
                width: "60px",
                backgroundColor: "rgb(249, 230 ,217, 10%)",
              }}
            >
              lastUpdate
            </th>

            <th
              style={{
                width: "65px",
                backgroundColor: "rgb(60, 251, 43, 10%)",
              }}
            >
              Lymhurst
            </th>
            <th
              style={{
                width: "60px",
                backgroundColor: "rgb(60, 251, 43, 10%)",
              }}
            >
              profit
            </th>
            <th
              style={{
                width: "65px",
                backgroundColor: "rgb(60, 251, 43, 10%)",
              }}
            >
              lastUpdate
            </th>
            <th
              style={{
                width: "65px",
                backgroundColor: "rgb(134, 67, 189, 10%)",
              }}
            >
              Carleon
            </th>
            <th
              style={{
                width: "60px",
                backgroundColor: "rgb(134, 67, 189, 10%)",
              }}
            >
              profit
            </th>
            <th
              style={{
                width: "65px",
                backgroundColor: "rgb(134, 67, 189, 10%)",
              }}
            >
              lastUpdate
            </th>
          </tr>
        </thead>
        <tbody>
          {item.map((items, key) => {
            let url = `https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/${items.item_id}`;
            return (
              <tr key={key}>
                <img style={{ width: "40px" }} src={url} />
                <th>{Enum[items.item_id]}</th>
                <th>{items.BlackMarket.sell}</th>
                <th>{Math.round((items.BlackMarket.sell / 100) * 89.5)}</th>
                <th>{checkTimeBD(items.BlackMarket.sellDate)}</th>
                <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                  {items.Bridgewatch.sell}
                </th>
                <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                  {items.BlackMarket.sell && items.Bridgewatch.sell
                    ? profit(items.BlackMarket.sell, items.Bridgewatch.sell)
                    : ""}
                </th>
                <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                  {checkTimeBD(items.Martlock.sellDate)}
                </th>
                <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                  {items.Martlock.sell}
                </th>
                <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                  {items.BlackMarket.sell && items.Martlock.sell
                    ? profit(items.BlackMarket.sell, items.Martlock.sell)
                    : ""}
                </th>
                <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                  {checkTimeBD(items.Thetford.sellDate)}
                </th>
                <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                  {items.Thetford.sell}
                </th>
                <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                  {items.BlackMarket.sell && items.Thetford.sell
                    ? profit(items.BlackMarket.sell, items.Thetford.sell)
                    : ""}
                </th>
                <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                  {checkTimeBD(items.FortSterling.sellDate)}
                </th>
                <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                  {items.FortSterling.sell}
                </th>
                <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                  {items.BlackMarket.sell && items.FortSterling.sell
                    ? profit(items.BlackMarket.sell, items.FortSterling.sell)
                    : ""}
                </th>
                <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                  {checkTimeBD(items.FortSterling.sellDate)}
                </th>
                <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                  {items.Lymhurst.sell}
                </th>
                <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                  {items.BlackMarket.sell && items.Lymhurst.sell
                    ? profit(items.BlackMarket.sell, items.Lymhurst.sell)
                    : ""}
                </th>
                <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                  {checkTimeBD(items.Lymhurst.sellDate)}
                </th>
                <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                  {items.Caerleon.sell}
                </th>
                <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                  {items.BlackMarket.sell && items.Caerleon.sell
                    ? profit(items.BlackMarket.sell, items.Caerleon.sell)
                    : ""}
                </th>
                <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                  {checkTimeBD(items.Caerleon.sellDate)}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
