import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Leaf, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolarCalculator = () => {
  const [monthlyBill, setMonthlyBill] = useState(250);

  const calculations = useMemo(() => {
    const annualBill = monthlyBill * 12;
    const savingsRate = 0.85;
    const annualSavings = annualBill * savingsRate;
    const twentyYearSavings = annualSavings * 20;
    const systemSize = Math.ceil(monthlyBill / 30);

    return {
      annualSavings: Math.round(annualSavings),
      twentyYearSavings: Math.round(twentyYearSavings),
      systemSize,
      co2Offset: Math.round(systemSize * 1.5),
    };
  }, [monthlyBill]);

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 max-w-md w-full relative overflow-hidden">
      <div className="relative">
        <div className="flex items-center gap-2 mb-1">
          <Sun className="w-5 h-5 text-primary" />
          <h3 className="font-display font-bold text-xl text-foreground">
            Solar Savings Calculator
          </h3>
        </div>
        <p className="text-muted-foreground text-sm mb-5">
          See how much you could save with solar
        </p>

        {/* Monthly Bill Slider */}
        <div className="mb-5">
          <div className="flex justify-between mb-2">
            <label className="text-xs font-medium text-foreground">Monthly Electric Bill</label>
            <span className="text-base font-bold gradient-text">${monthlyBill}</span>
          </div>
          <input
            type="range"
            min="100"
            max="1000"
            step="10"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
            className="w-full h-2 bg-gradient-to-r from-muted to-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-primary [&::-webkit-slider-thumb]:to-primary/80 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-primary/30 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>$100</span>
            <span>$1,000</span>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl p-5 mb-5 border border-primary/10">
          <div className="text-center mb-4">
            <p className="text-xs text-muted-foreground mb-1">Estimated 20-Year Savings</p>
            <p className="font-display font-bold text-3xl gradient-text">
              ${calculations.twentyYearSavings.toLocaleString()}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-white/50 rounded-lg p-2 hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold text-foreground">{calculations.systemSize}</p>
              <p className="text-[10px] text-muted-foreground">kW System</p>
            </div>
            <div className="bg-white/50 rounded-lg p-2 hover:scale-105 transition-transform">
              <Sun className="w-4 h-4 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold text-foreground">${calculations.annualSavings.toLocaleString()}</p>
              <p className="text-[10px] text-muted-foreground">Annual Savings</p>
            </div>
            <div className="bg-white/50 rounded-lg p-2 hover:scale-105 transition-transform">
              <Leaf className="w-4 h-4 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold text-foreground">{calculations.co2Offset}</p>
              <p className="text-[10px] text-muted-foreground">Tons CO₂/yr</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Button variant="hero" size="default" className="w-full" asChild>
          <Link to="/contact">
            Book Your Free Call <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SolarCalculator;
