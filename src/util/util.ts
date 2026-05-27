export const getRandomNum = (max: number): number => {
    return Math.floor(Math.random() * max);
};

export const copyToClipboard = (user: string) => {
    navigator.clipboard.writeText(user)
        .then(() => alert("Copied to clipboard!"))
        .catch((err) => alert(`Error! Reason ${err}`));
};