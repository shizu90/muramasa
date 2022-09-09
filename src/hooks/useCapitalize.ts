export default function useCapitalize() {
    const capitalize = (string: string): string => {
        if(string.length > 2) {
            const newString = string.charAt(0).toUpperCase() + string.slice(1);
            return newString;
        }else {
            return string;
        }
    }

    return {
        capitalize
    }
}