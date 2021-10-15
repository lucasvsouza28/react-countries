import loading from '../assets/Pulse-1s-200px.svg';

type Props = {
    width?: string;
    heigth?: string;
}

export const Loading = ({
    width = '60px',
    heigth = '60px'
}: Props) => {
    return (        
        <svg xmlns="http://www.w3.org/2000/svg" style={{
            margin: 'auto',
            display: 'block',
            shapeRendering: 'auto'
        }} width={width} height={heigth} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" data-darkreader-inline-bgimage="" data-darkreader-inline-bgcolor="">
            <rect x="17.5" y="30" width="15" height="40" fill="#93dbe9" data-darkreader-inline-fill="">
            <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
            <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="64;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
            </rect>
            <rect x="42.5" y="30" width="15" height="40" fill="#689cc5" data-darkreader-inline-fill="">
            <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
            <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
            </rect>
            <rect x="67.5" y="30" width="15" height="40" fill="#5e6fa3" data-darkreader-inline-fill="">
            <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
            <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
            </rect>
        </svg>
    );
};
