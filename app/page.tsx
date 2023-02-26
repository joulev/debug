export default async function TimesDisplay() {
  const kz_timer = fetch(
    `https://kztimerglobal.com/api/v2.0/records/top/recent?modes_list_string=kz_timer&place_top_at_least=1&has_teleports=false&stage=0&limit=5&tickrate=128`
  ).then((r) => r.json());
  const kz_simple = fetch(
    `https://kztimerglobal.com/api/v2.0/records/top/recent?modes_list_string=kz_simple&place_top_at_least=1&has_teleports=false&stage=0&limit=5&tickrate=128`
  ).then((r) => r.json());
  const kz_vanilla = fetch(
    `https://kztimerglobal.com/api/v2.0/records/top/recent?modes_list_string=kz_vanilla&place_top_at_least=1&has_teleports=false&stage=0&limit=5&tickrate=128`
  ).then((r) => r.json());

  const recent_times = await Promise.all([kz_timer, kz_simple, kz_vanilla]);
  return <pre>{JSON.stringify(recent_times, null, 2)}</pre>;
}
