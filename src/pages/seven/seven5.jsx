import React, { useEffect, useState } from "react";
import { Nav, NavLink, NavMenu } from "../../components/Navbar/NavbarElements";

const Enum = {
  T7_HEAD_CLOTH_SET1: "Колпак ученого (магистр)",
  T7_HEAD_CLOTH_SET2: "Колпак клирика (магистр)",
  T7_HEAD_CLOTH_SET3: "Колпак чародея (магистр)",
  T7_ARMOR_CLOTH_SET1: "Мантия ученого (магистр)",
  T7_ARMOR_CLOTH_SET2: "Мантия клирика (магистр)",
  T7_ARMOR_CLOTH_SET3: "Мантия чародея (магистр)",
  T7_SHOES_CLOTH_SET1: "Сандалии ученого (магистр)",
  T7_SHOES_CLOTH_SET2: "Сандалии клирика (магистр)",
  T7_SHOES_CLOTH_SET3: "Сандалии чародея (магистр)",
  T7_MAIN_ARCANESTAFF: "Мистический посох (магистр)",
  T7_2H_ARCANESTAFF: "Большой мистический посох (магистр)",
  T7_2H_ENIGMATICSTAFF: "Загадочный посох (магистр)",
  T7_MAIN_CURSEDSTAFF: "Проклятый посох (магистр)",
  T7_2H_CURSEDSTAFF: "Большой проклятый посох (магистр)",
  T7_2H_DEMONICSTAFF: "Демонический посох (магистр)",
  T7_MAIN_FIRESTAFF: "Огненный посох (магистр)",
  T7_2H_FIRESTAFF: "Большой огненный посох (магистр)",
  T7_2H_INFERNOSTAFF: "Адский посох (магистр)",
  T7_MAIN_FROSTSTAFF: "Морозный посох (магистр)",
  T7_2H_FROSTSTAFF: "Большой морозный посох (магистр)",
  T7_2H_GLACIALSTAFF: "Ледяной посох (магистр)",
  T7_MAIN_HOLYSTAFF: "Священный посох (магистр)",
  T7_2H_HOLYSTAFF: "Большой священный посох (магистр)",
  T7_2H_DIVINESTAFF: "Божественный посох (магистр)",
  T7_OFF_BOOK: "Книга заклинаний (магистр)",
  T7_HEAD_LEATHER_SET1: "Капюшон наемника (магистр)",
  T7_HEAD_LEATHER_SET2: "Капюшон охотника (магистр)",
  T7_HEAD_LEATHER_SET3: "Капюшон убийцы (магистр)",
  T7_ARMOR_LEATHER_SET1: "Куртка наемника (магистр)",
  T7_ARMOR_LEATHER_SET2: "Куртка охотника (магистр)",
  T7_ARMOR_LEATHER_SET3: "Куртка убийцы (магистр)",
  T7_SHOES_LEATHER_SET1: "Ботинки наемника (магистр)",
  T7_SHOES_LEATHER_SET2: "Ботинки охотника (магистр)",
  T7_SHOES_LEATHER_SET3: "Ботинки убийцы (магистр)",
  T7_2H_BOW: "Лук (магистр)",
  T7_2H_WARBOW: "Боевой лук (магистр)",
  T7_2H_LONGBOW: "Длинный лук (магистр)",
  T7_MAIN_SPEAR: "Копье (магистр)",
  T7_2H_SPEAR: "Пика (магистр)",
  T7_2H_GLAIVE: "Глефа (магистр)",
  T7_MAIN_NATURESTAFF: "Древесный посох (магистр)",
  T7_2H_NATURESTAFF: "Большой древесный посох (магистр)",
  T7_2H_WILDSTAFF: "Дикий посох (магистр)",
  T7_MAIN_DAGGER: "Кинжал (магистр)",
  T7_2H_DAGGERPAIR: "Парные кинжалы (магистр)",
  T7_2H_CLAWPAIR: "Когти (магистр)",
  T7_2H_QUARTERSTAFF: "Боевой шест (магистр)",
  T7_2H_IRONCLADEDSTAFF: "Железный посох (магистр)",
  T7_2H_DOUBLEBLADEDSTAFF: "Острый шест (магистр)",
  T7_OFF_TORCH: "Факел (магистр)",
  T7_HEAD_PLATE_SET1: "Шлем солдата (магистр)",
  T7_HEAD_PLATE_SET2: "Шлем рыцаря (магистр)",
  T7_HEAD_PLATE_SET3: "Шлем хранителя (магистр)",
  T7_ARMOR_PLATE_SET1: "Броня солдата (магистр)",
  T7_ARMOR_PLATE_SET2: "Броня рыцаря (магистр)",
  T7_ARMOR_PLATE_SET3: "Броня хранителя (магистр)",
  T7_SHOES_PLATE_SET1: "Сапоги солдата (магистр)",
  T7_SHOES_PLATE_SET2: "Сапоги рыцаря (магистр)",
  T7_SHOES_PLATE_SET3: "Сапоги хранителя (магистр)",
  T7_MAIN_SWORD: "Палаш (магистр)",
  T7_2H_CLAYMORE: "Клеймор (магистр)",
  T7_2H_DUALSWORD: "Парные мечи (магистр)",
  T7_MAIN_AXE: "Боевой топор (магистр)",
  T7_2H_AXE: "Большой топор (магистр)",
  T7_2H_HALBERD: "Алебарда (магистр)",
  T7_2H_MACE: "Булава (магистр)",
  T7_MAIN_MACE: "Тяжелая булава (магистр)",
  T7_2H_FLAIL: "Моргенштерн (магистр)",
  T7_2H_TOOL_SIEGEHAMMER: "Молот (магистр)",
  T7_2H_POLEHAMMER: "Чекан (магистр)",
  T7_2H_HAMMER: "Большой молот (магистр)",
  T7_2H_CROSSBOW: "Арбалет (магистр)",
  T7_2H_CROSSBOWLARGE: "Тяжелый арбалет (магистр)",
  T7_MAIN_1HCROSSBOW: "Легкий арбалет (магистр)",
  T7_OFF_SHIELD: "Щит (магистр)",
  T7_BAG: "Сумка (магистр)",
  T7_CAPE: "Плащ (магистр)",
};

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
      `https://www.albion-online-data.com/api/v2/stats/prices/T7_HEAD_CLOTH_SET1,T7_HEAD_CLOTH_SET2,T7_HEAD_CLOTH_SET3,T7_ARMOR_CLOTH_SET1,T7_ARMOR_CLOTH_SET2,T7_ARMOR_CLOTH_SET3,T7_SHOES_CLOTH_SET1,T7_SHOES_CLOTH_SET2,T7_SHOES_CLOTH_SET3,T7_MAIN_ARCANESTAFF,T7_2H_ARCANESTAFF,T7_2H_ENIGMATICSTAFF,T7_MAIN_CURSEDSTAFF,T7_2H_CURSEDSTAFF,T7_2H_DEMONICSTAFF,T7_MAIN_FIRESTAFF,T7_2H_FIRESTAFF,T7_2H_INFERNOSTAFF,T7_2H_FROSTSTAFF,T7_2H_FROSTSTAFF,T7_2H_GLACIALSTAFF,T7_MAIN_HOLYSTAFF,T7_2H_HOLYSTAFF,T7_2H_DIVINESTAFF,T7_OFF_BOOK,T7_HEAD_LEATHER_SET2,T7_HEAD_LEATHER_SET3,T7_ARMOR_LEATHER_SET1,T7_ARMOR_LEATHER_SET2,T7_ARMOR_LEATHER_SET3,T7_SHOES_LEATHER_SET1,T7_SHOES_LEATHER_SET2,T7_SHOES_LEATHER_SET3,T7_2H_BOW,T7_2H_WARBOW,T7_2H_LONGBOW,T7_MAIN_SPEAR,T7_2H_SPEAR,T7_2H_GLAIVE,T7_MAIN_NATURESTAFF,T7_2H_NATURESTAFF,T7_2H_WILDSTAFF,T7_MAIN_DAGGER,T7_2H_DAGGERPAIR,T7_2H_CLAWPAIR,T7_2H_QUARTERSTAFF,T7_2H_IRONCLADEDSTAFF,T7_2H_DOUBLEBLADEDSTAFF,T7_OFF_TORCH,T7_HEAD_PLATE_SET1,T7_HEAD_PLATE_SET2,T7_HEAD_PLATE_SET3,T7_ARMOR_PLATE_SET1,T7_ARMOR_PLATE_SET2,T7_ARMOR_PLATE_SET3,T7_SHOES_PLATE_SET1,T7_SHOES_PLATE_SET2,T7_SHOES_PLATE_SET3,T7_MAIN_SWORD,T7_2H_CLAYMORE,T7_2H_DUALSWORD,T7_MAIN_AXE,T7_2H_AXE,T7_2H_HALBERD,T7_2H_MACE,T7_MAIN_MACE,T7_2H_FLAIL,T7_2H_TOOL_SIEGEHAMMER,T7_2H_POLEHAMMER,T7_2H_HAMMER,T7_2H_CROSSBOW,T7_2H_CROSSBOWLARGE,T7_MAIN_1HCROSSBOW,T7_OFF_SHIELD,T7_BAG,T7_CAPE?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch&qualities=5`
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
      else objectReadyJSON.Lymhurst = { buy: 0, sell: 0 };
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

  return (
    <>
      <div>
        <Nav>
          <NavMenu>
            <h1>Т 7 - Качество: шедевр</h1>
            <NavLink to="/seven" activeStyle>
              1
            </NavLink>
            <NavLink to="/seven2" activeStyle>
              2
            </NavLink>
            <NavLink to="/seven3" activeStyle>
              3
            </NavLink>
            <NavLink to="/seven4" activeStyle>
              4
            </NavLink>
            <NavLink to="/seven5" activeStyle>
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
