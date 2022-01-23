import React, { useEffect, useState } from "react";
// import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";
// コンポーネントを使用している時はファイル名の拡張子はjsxにする

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0); //変数、変数を更新する関数。0初期値
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const OnClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //　関心の分離
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]); //空の配列だと最初の一回のみ実行。変数入れるとその変数が変更された時だけ実行

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="元気です!" /> */}
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={OnClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>😂</p>}
    </>
  );
};

export default App; //他でも使用できるようにする
