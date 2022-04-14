export const generateId = (value?: string) => {
    const randomNumber = Math.random().toFixed(8).slice(2);
    return value ? `${value}_${randomNumber}` : randomNumber;
};
