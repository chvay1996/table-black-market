import React, { useEffect, useState } from "react";
import { Nav, NavLink, NavMenu } from "../../components/Navbar/NavbarElements";

const Enum = {
  T6_HEAD_CLOTH_SET1: "Колпак ученого (мастер)",
  T6_HEAD_CLOTH_SET2: "Колпак клирика (мастер)",
  T6_HEAD_CLOTH_SET3: "Колпак чародея (мастер)",
  T6_ARMOR_CLOTH_SET1: "Мантия ученого (мастер)",
  T6_ARMOR_CLOTH_SET2: "Мантия клирика (мастер)",
  T6_ARMOR_CLOTH_SET3: "Мантия чародея (мастер)",
  T6_SHOES_CLOTH_SET1: "Сандалии ученого (мастер)",
  T6_SHOES_CLOTH_SET2: "Сандалии клирика (мастер)",
  T6_SHOES_CLOTH_SET3: "Сандалии чародея (мастер)",
  T6_MAIN_ARCANESTAFF: "Мистический посох (мастер)",
  T6_2H_ARCANESTAFF: "Большой мистический посох (мастер)",
  T6_2H_ENIGMATICSTAFF: "Загадочный посох (мастер)",
  T6_MAIN_CURSEDSTAFF: "Проклятый посох (мастер)",
  T6_2H_CURSEDSTAFF: "Большой проклятый посох (мастер)",
  T6_2H_DEMONICSTAFF: "Демонический посох (мастер)",
  T6_MAIN_FIRESTAFF: "Огненный посох (мастер)",
  T6_2H_FIRESTAFF: "Большой огненный посох (мастер)",
  T6_2H_INFERNOSTAFF: "Адский посох (мастер)",
  T6_MAIN_FROSTSTAFF: "Морозный посох (мастер)",
  T6_2H_FROSTSTAFF: "Большой морозный посох (мастер)",
  T6_2H_GLACIALSTAFF: "Ледяной посох (мастер)",
  T6_MAIN_HOLYSTAFF: "Священный посох (мастер)",
  T6_2H_HOLYSTAFF: "Большой священный посох (мастер)",
  T6_2H_DIVINESTAFF: "Божественный посох (мастер)",
  T6_OFF_BOOK: "Книга заклинаний (мастер)",
  T6_HEAD_LEATHER_SET1: "Капюшон наемника (знатока)",
  T6_HEAD_LEATHER_SET2: "Капюшон охотника (мастер)",
  T6_HEAD_LEATHER_SET3: "Капюшон убийцы (мастер)",
  T6_ARMOR_LEATHER_SET1: "Куртка наемника (мастер)",
  T6_ARMOR_LEATHER_SET2: "Куртка охотника (мастер)",
  T6_ARMOR_LEATHER_SET3: "Куртка убийцы (мастер)",
  T6_SHOES_LEATHER_SET1: "Ботинки наемника (мастер)",
  T6_SHOES_LEATHER_SET2: "Ботинки охотника (мастер)",
  T6_SHOES_LEATHER_SET3: "Ботинки убийцы (мастер)",
  T6_2H_BOW: "Лук (мастер)",
  T6_2H_WARBOW: "Боевой лук (мастер)",
  T6_2H_LONGBOW: "Длинный лук (мастер)",
  T6_MAIN_SPEAR: "Копье (мастер)",
  T6_2H_SPEAR: "Пика (мастер)",
  T6_2H_GLAIVE: "Глефа (мастер)",
  T6_MAIN_NATURESTAFF: "Древесный посох (мастер)",
  T6_2H_NATURESTAFF: "Большой древесный посох (мастер)",
  T6_2H_WILDSTAFF: "Дикий посох (мастер)",
  T6_MAIN_DAGGER: "Кинжал (мастер)",
  T6_2H_DAGGERPAIR: "Парные кинжалы (мастер)",
  T6_2H_CLAWPAIR: "Когти (мастер)",
  T6_2H_QUARTERSTAFF: "Боевой шест (мастер)",
  T6_2H_IRONCLADEDSTAFF: "Железный посох (мастер)",
  T6_2H_DOUBLEBLADEDSTAFF: "Острый шест (мастер)",
  T6_OFF_TORCH: "Факел (мастер)",
  T6_HEAD_PLATE_SET1: "Шлем солдата (мастер)",
  T6_HEAD_PLATE_SET2: "Шлем рыцаря (мастер)",
  T6_HEAD_PLATE_SET3: "Шлем хранителя (мастер)",
  T6_ARMOR_PLATE_SET1: "Броня солдата (мастер)",
  T6_ARMOR_PLATE_SET2: "Броня рыцаря (мастер)",
  T6_ARMOR_PLATE_SET3: "Броня хранителя (мастер)",
  T6_SHOES_PLATE_SET1: "Сапоги солдата (мастер)",
  T6_SHOES_PLATE_SET2: "Сапоги рыцаря (мастер)",
  T6_SHOES_PLATE_SET3: "Сапоги хранителя (мастер)",
  T6_MAIN_SWORD: "Палаш (мастер)",
  T6_2H_CLAYMORE: "Клеймор (мастер)",
  T6_2H_DUALSWORD: "Парные мечи (мастер)",
  T6_MAIN_AXE: "Боевой топор (мастер)",
  T6_2H_AXE: "Большой топор (мастер)",
  T6_2H_HALBERD: "Алебарда (мастер)",
  T6_2H_MACE: "Булава (мастер)",
  T6_MAIN_MACE: "Тяжелая булава (мастер)",
  T6_2H_FLAIL: "Моргенштерн (мастер)",
  T6_2H_TOOL_SIEGEHAMMER: "Молот (мастер)",
  T6_2H_POLEHAMMER: "Чекан (мастер)",
  T6_2H_HAMMER: "Большой молот (мастер)",
  T6_2H_CROSSBOW: "Арбалет (мастер)",
  T6_2H_CROSSBOWLARGE: "Тяжелый арбалет (мастер)",
  T6_MAIN_1HCROSSBOW: "Легкий арбалет (мастер)",
  T6_OFF_SHIELD: "Щит (мастер)",
  T6_BAG: "Сумка (мастер)",
  T6_CAPE: "Плащ (мастер)",
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
      ` https://www.albion-online-data.com/api/v2/stats/prices/T6_HEAD_CLOTH_SET1,T6_HEAD_CLOTH_SET2,T6_HEAD_CLOTH_SET3,T6_ARMOR_CLOTH_SET1,T6_ARMOR_CLOTH_SET2,T6_ARMOR_CLOTH_SET3,T6_SHOES_CLOTH_SET1,T6_SHOES_CLOTH_SET2,T6_SHOES_CLOTH_SET3,T6_MAIN_ARCANESTAFF,T6_2H_ARCANESTAFF,T6_2H_ENIGMATICSTAFF,T6_MAIN_CURSEDSTAFF,T6_2H_CURSEDSTAFF,T6_2H_DEMONICSTAFF,T6_MAIN_FIRESTAFF,T6_2H_FIRESTAFF,T6_2H_INFERNOSTAFF,T6_2H_FROSTSTAFF,T6_2H_FROSTSTAFF,T6_2H_GLACIALSTAFF,T6_MAIN_HOLYSTAFF,T6_2H_HOLYSTAFF,T6_2H_DIVINESTAFF,T6_OFF_BOOK,T6_HEAD_LEATHER_SET2,T6_HEAD_LEATHER_SET3,T6_ARMOR_LEATHER_SET1,T6_ARMOR_LEATHER_SET2,T6_ARMOR_LEATHER_SET3,T6_SHOES_LEATHER_SET1,T6_SHOES_LEATHER_SET2,T6_SHOES_LEATHER_SET3,T6_2H_BOW,T6_2H_WARBOW,T6_2H_LONGBOW,T6_MAIN_SPEAR,T6_2H_SPEAR,T6_2H_GLAIVE,T6_MAIN_NATURESTAFF,T6_2H_NATURESTAFF,T6_2H_WILDSTAFF,T6_MAIN_DAGGER,T6_2H_DAGGERPAIR,T6_2H_CLAWPAIR,T6_2H_QUARTERSTAFF,T6_2H_IRONCLADEDSTAFF,T6_2H_DOUBLEBLADEDSTAFF,T6_OFF_TORCH,T6_HEAD_PLATE_SET1,T6_HEAD_PLATE_SET2,T6_HEAD_PLATE_SET3,T6_ARMOR_PLATE_SET1,T6_ARMOR_PLATE_SET2,T6_ARMOR_PLATE_SET3,T6_SHOES_PLATE_SET1,T6_SHOES_PLATE_SET2,T6_SHOES_PLATE_SET3,T6_MAIN_SWORD,T6_2H_CLAYMORE,T6_2H_DUALSWORD,T6_MAIN_AXE,T6_2H_AXE,T6_2H_HALBERD,T6_2H_MACE,T6_MAIN_MACE,T6_2H_FLAIL,T6_2H_TOOL_SIEGEHAMMER,T6_2H_POLEHAMMER,T6_2H_HAMMER,T6_2H_CROSSBOW,T6_2H_CROSSBOWLARGE,T6_MAIN_1HCROSSBOW,T6_OFF_SHIELD,T6_BAG,T6_CAPE?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch&qualities=5`
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

  return (
    <>
      <div>
        <Nav>
          <NavMenu>
            <h1>Т 6 - Качество: шедевр</h1>
            <NavLink to="/tsix" activeStyle>
              1
            </NavLink>
            <NavLink to="/tsix2" activeStyle>
              2
            </NavLink>
            <NavLink to="/tsix3" activeStyle>
              3
            </NavLink>
            <NavLink to="/tsix4" activeStyle>
              4
            </NavLink>
            <NavLink to="/tsix5" activeStyle>
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
