import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const [countDown, setCountDown] = useState<number>(5);

    useEffect(() => {
        setTimeout(() => {
            setCountDown(prev => prev - 1);
        }, 1000);

        if (countDown < 0) {
            navigate("/");
        }
    }, [countDown]);

    return (
        <div style={{
            fontSize: "30px",
            marginTop: "50px",
            textAlign: "center",
        }}>
            <strong>Page Not Found</strong>
            <p style={{ fontSize: "20px" }}>
                <em>
                    Redirected in 
                    <span style={{ margin: "0 15px", color: "#f9aa9d" }}>{ countDown }</span>
                    second{ countDown === 1 ? "" : "s" }...
                </em>
            </p>
        </div>
    );
}

export default NotFound;