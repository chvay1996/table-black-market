import React, { useEffect, useState } from "react";
import { Nav, NavLink, NavMenu } from "../../components/Navbar/NavbarElements";

const Enum = {
  T5_HEAD_CLOTH_SET1: "Колпак ученого (эксперт)",
  T5_HEAD_CLOTH_SET2: "Колпак клирика (эксперт)",
  T5_HEAD_CLOTH_SET3: "Колпак чародея (эксперт)",
  T5_ARMOR_CLOTH_SET1: "Мантия ученого (эксперт)",
  T5_ARMOR_CLOTH_SET2: "Мантия клирика (эксперт)",
  T5_ARMOR_CLOTH_SET3: "Мантия чародея (эксперт)",
  T5_SHOES_CLOTH_SET1: "Сандалии ученого (эксперт)",
  T5_SHOES_CLOTH_SET2: "Сандалии клирика (эксперт)",
  T5_SHOES_CLOTH_SET3: "Сандалии чародея (эксперт)",
  T5_MAIN_ARCANESTAFF: "Мистический посох (эксперт)",
  T5_2H_ARCANESTAFF: "Большой мистический посох (эксперт)",
  T5_2H_ENIGMATICSTAFF: "Загадочный посох (эксперт)",
  T5_MAIN_CURSEDSTAFF: "Проклятый посох (эксперт)",
  T5_2H_CURSEDSTAFF: "Большой проклятый посох (эксперт)",
  T5_2H_DEMONICSTAFF: "Демонический посох (эксперт)",
  T5_MAIN_FIRESTAFF: "Огненный посох (эксперт)",
  T5_2H_FIRESTAFF: "Большой огненный посох (эксперт)",
  T5_2H_INFERNOSTAFF: "Адский посох (эксперт)",
  T5_MAIN_FROSTSTAFF: "Морозный посох (эксперт)",
  T5_2H_FROSTSTAFF: "Большой морозный посох (эксперт)",
  T5_2H_GLACIALSTAFF: "Ледяной посох (эксперт)",
  T5_MAIN_HOLYSTAFF: "Священный посох (эксперт)",
  T5_2H_HOLYSTAFF: "Большой священный посох (эксперт)",
  T5_2H_DIVINESTAFF: "Божественный посох (эксперт)",
  T5_OFF_BOOK: "Книга заклинаний (эксперт)",
  T5_HEAD_LEATHER_SET1: "Капюшон наемника (знатока)",
  T5_HEAD_LEATHER_SET2: "Капюшон охотника (эксперт)",
  T5_HEAD_LEATHER_SET3: "Капюшон убийцы (эксперт)",
  T5_ARMOR_LEATHER_SET1: "Куртка наемника (эксперт)",
  T5_ARMOR_LEATHER_SET2: "Куртка охотника (эксперт)",
  T5_ARMOR_LEATHER_SET3: "Куртка убийцы (эксперт)",
  T5_SHOES_LEATHER_SET1: "Ботинки наемника (эксперт)",
  T5_SHOES_LEATHER_SET2: "Ботинки охотника (эксперт)",
  T5_SHOES_LEATHER_SET3: "Ботинки убийцы (эксперт)",
  T5_2H_BOW: "Лук (эксперт)",
  T5_2H_WARBOW: "Боевой лук (эксперт)",
  T5_2H_LONGBOW: "Длинный лук (эксперт)",
  T5_MAIN_SPEAR: "Копье (эксперт)",
  T5_2H_SPEAR: "Пика (эксперт)",
  T5_2H_GLAIVE: "Глефа (эксперт)",
  T5_MAIN_NATURESTAFF: "Древесный посох (эксперт)",
  T5_2H_NATURESTAFF: "Большой древесный посох (эксперт)",
  T5_2H_WILDSTAFF: "Дикий посох (эксперт)",
  T5_MAIN_DAGGER: "Кинжал (эксперт)",
  T5_2H_DAGGERPAIR: "Парные кинжалы (эксперт)",
  T5_2H_CLAWPAIR: "Когти (эксперт)",
  T5_2H_QUARTERSTAFF: "Боевой шест (эксперт)",
  T5_2H_IRONCLADEDSTAFF: "Железный посох (эксперт)",
  T5_2H_DOUBLEBLADEDSTAFF: "Острый шест (эксперт)",
  T5_OFF_TORCH: "Факел (эксперт)",
  T5_HEAD_PLATE_SET1: "Шлем солдата (эксперт)",
  T5_HEAD_PLATE_SET2: "Шлем рыцаря (эксперт)",
  T5_HEAD_PLATE_SET3: "Шлем хранителя (эксперт)",
  T5_ARMOR_PLATE_SET1: "Броня солдата (эксперт)",
  T5_ARMOR_PLATE_SET2: "Броня рыцаря (эксперт)",
  T5_ARMOR_PLATE_SET3: "Броня хранителя (эксперт)",
  T5_SHOES_PLATE_SET1: "Сапоги солдата (эксперт)",
  T5_SHOES_PLATE_SET2: "Сапоги рыцаря (эксперт)",
  T5_SHOES_PLATE_SET3: "Сапоги хранителя (эксперт)",
  T5_MAIN_SWORD: "Палаш (эксперт)",
  T5_2H_CLAYMORE: "Клеймор (эксперт)",
  T5_2H_DUALSWORD: "Парные мечи (эксперт)",
  T5_MAIN_AXE: "Боевой топор (эксперт)",
  T5_2H_AXE: "Большой топор (эксперт)",
  T5_2H_HALBERD: "Алебарда (эксперт)",
  T5_2H_MACE: "Булава (эксперт)",
  T5_MAIN_MACE: "Тяжелая булава (эксперт)",
  T5_2H_FLAIL: "Моргенштерн (эксперт)",
  T5_2H_TOOL_SIEGEHAMMER: "Молот (эксперт)",
  T5_2H_POLEHAMMER: "Чекан (эксперт)",
  T5_2H_HAMMER: "Большой молот (эксперт)",
  T5_2H_CROSSBOW: "Арбалет (эксперт)",
  T5_2H_CROSSBOWLARGE: "Тяжелый арбалет (эксперт)",
  T5_MAIN_1HCROSSBOW: "Легкий арбалет (эксперт)",
  T5_OFF_SHIELD: "Щит (эксперт)",
  T5_BAG: "Сумка (эксперт)",
  T5_CAPE: "Плащ (эксперт)",
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
      ` https://www.albion-online-data.com/api/v2/stats/prices/T5_HEAD_CLOTH_SET1,T5_HEAD_CLOTH_SET2,T5_HEAD_CLOTH_SET3,T5_ARMOR_CLOTH_SET1,T5_ARMOR_CLOTH_SET2,T5_ARMOR_CLOTH_SET3,T5_SHOES_CLOTH_SET1,T5_SHOES_CLOTH_SET2,T5_SHOES_CLOTH_SET3,T5_MAIN_ARCANESTAFF,T5_2H_ARCANESTAFF,T5_2H_ENIGMATICSTAFF,T5_MAIN_CURSEDSTAFF,T5_2H_CURSEDSTAFF,T5_2H_DEMONICSTAFF,T5_MAIN_FIRESTAFF,T5_2H_FIRESTAFF,T5_2H_INFERNOSTAFF,T5_2H_FROSTSTAFF,T5_2H_FROSTSTAFF,T5_2H_GLACIALSTAFF,T5_MAIN_HOLYSTAFF,T5_2H_HOLYSTAFF,T5_2H_DIVINESTAFF,T5_OFF_BOOK,T5_HEAD_LEATHER_SET2,T5_HEAD_LEATHER_SET3,T5_ARMOR_LEATHER_SET1,T5_ARMOR_LEATHER_SET2,T5_ARMOR_LEATHER_SET3,T5_SHOES_LEATHER_SET1,T5_SHOES_LEATHER_SET2,T5_SHOES_LEATHER_SET3,T5_2H_BOW,T5_2H_WARBOW,T5_2H_LONGBOW,T5_MAIN_SPEAR,T5_2H_SPEAR,T5_2H_GLAIVE,T5_MAIN_NATURESTAFF,T5_2H_NATURESTAFF,T5_2H_WILDSTAFF,T5_MAIN_DAGGER,T5_2H_DAGGERPAIR,T5_2H_CLAWPAIR,T5_2H_QUARTERSTAFF,T5_2H_IRONCLADEDSTAFF,T5_2H_DOUBLEBLADEDSTAFF,T5_OFF_TORCH,T5_HEAD_PLATE_SET1,T5_HEAD_PLATE_SET2,T5_HEAD_PLATE_SET3,T5_ARMOR_PLATE_SET1,T5_ARMOR_PLATE_SET2,T5_ARMOR_PLATE_SET3,T5_SHOES_PLATE_SET1,T5_SHOES_PLATE_SET2,T5_SHOES_PLATE_SET3,T5_MAIN_SWORD,T5_2H_CLAYMORE,T5_2H_DUALSWORD,T5_MAIN_AXE,T5_2H_AXE,T5_2H_HALBERD,T5_2H_MACE,T5_MAIN_MACE,T5_2H_FLAIL,T5_2H_TOOL_SIEGEHAMMER,T5_2H_POLEHAMMER,T5_2H_HAMMER,T5_2H_CROSSBOW,T5_2H_CROSSBOWLARGE,T5_MAIN_1HCROSSBOW,T5_OFF_SHIELD,T5_BAG,T5_CAPE?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch&qualities=${qualities}`
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

  const qualities = 1;

  return (
    <>
      <div>
        <Nav>
          <NavMenu>
            <h1>Т 5.0 - Качество: обычное</h1>
            <NavLink to="/tfive" activeStyle>
              1
            </NavLink>
            <NavLink to="/tfive2" activeStyle>
              2
            </NavLink>
            <NavLink to="/tfive3" activeStyle>
              3
            </NavLink>
            <NavLink to="/tfive4" activeStyle>
              4
            </NavLink>
            <NavLink to="/tfive5" activeStyle>
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
