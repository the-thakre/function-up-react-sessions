import { atom, selector, useRecoilState } from 'recoil';

const tempFahrenheit = atom({
    key: 'tempFahrenheit',
    default: 32,
});

const tempCelsius = selector({
    key: 'tempCelsius',
    get: ({ get }) => ((get(tempFahrenheit) - 32) * 5) / 9,
    set: ({ set }, newValue) => set(tempFahrenheit, (newValue * 9) / 5 + 32),
});

export function RecoilAllInOne() {
    const [tempF, setTempF] = useRecoilState(tempFahrenheit);
    const [tempC, setTempC] = useRecoilState(tempCelsius);

    const addTenCelsius = () => setTempC(tempC + 10);
    const addTenFahrenheit = () => setTempF(tempF + 10);

    return (
        <div>
            Temp (Celsius): {tempC}
            <br />
            Temp (Fahrenheit): {tempF}
            <br />
            <button onClick={addTenCelsius}>Add 10 Celsius</button>
            <br />
            <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>
        </div>
    );
}