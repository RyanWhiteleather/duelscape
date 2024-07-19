export const ReadyCheckbox = ({ isChecked, onChange }) => {
    return (
        <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                id="ready-checkbox"
                checked={isChecked}
                onChange={onChange}
                className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="ready-checkbox" className="text-lg text-white pe-6 ">
                Ready
            </label>
        </div>
    );
};
