// rafceと入力後にタブキーを押します🤗
import React, { useEffect, useState } from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
// style.module.scssを読み込むには
// importというものを使い、ファイルを紐づける必要があります🤗

import style from "./style.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
    //!!token は、token の値を 明示的に boolean 型（true または false）に変換するテクニック🤗
    // `token` があれば `true`、なければ `false`
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <div className={style.header}>
      <ul>
        <li>
          <AccessibilityIcon />
          {isAuthenticated ? (
            <a onClick={logout}>ログアウト</a>
          ) : (
            <Link href="/login">ログイン</Link>
          )}
        </li>
        <li>
          <Link href={"/signup"}>
            <AirplanemodeActiveIcon />
            登録
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
