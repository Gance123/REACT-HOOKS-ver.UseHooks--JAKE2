import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";
import "./styles.css";

export default function App() {
  // ロジック部分を切り抜いて新たに作成したhooksから、必要な引数と関数を呼び出す
  //・・・ロジック部分とは、例えばuseStateでいうset~~~の部分
  const { getUsers, userProfile, loading, error } = useAllUsers();

  const onClickFechUser = () => {
    getUsers();
  };

  return (
    <div className="App">
      <button onClick={onClickFechUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading....</p>
      ) : (
        <>
          {userProfile.map((user) => (
            <UserCard key={user.id} user={user} />
            //user = user.data
          ))}
        </>
      )}
    </div>
  );
}
