"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  X,
  ChevronDown,
  User,
  Home,
  TrendingUp,
  Star,
  Package,
  ShoppingCart,
  Percent,
  Users,
  Gift,
  Zap,
} from "lucide-react";
import { useAppSelector } from "../../redux/hooks";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInSection: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const user = useAppSelector((state) => state.auth.user);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated && user) {
    return (
      <div
        onClick={onClose}
        className="w-full p-4 text-left flex items-center space-x-3 cursor-default"
      >
        <User className="w-5 h-5 text-[var(--gray-dark)]" />
        <Link href="/account" className="text-[var(--black)] font-medium">{user.name}</Link>
      </div>
    );
  } else {
    return (
      <Link
        href="/login"
        onClick={onClose}
        className="w-full p-4 text-left hover:bg-[var(--bg-light)] transition-colors flex items-center space-x-3"
      >
        <User className="w-5 h-5 text-[var(--gray-dark)]" />
        <span className="text-[var(--black)] font-medium">Sign in</span>
      </Link>
    );
  }
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const topCategories = [
    { name: "Electronics", icon: <Zap className="w-5 h-5" /> },
    { name: "Fashion", icon: <Gift className="w-5 h-5" /> },
    { name: "Computers", icon: <Package className="w-5 h-5" /> },
    { name: "Home", icon: <Home className="w-5 h-5" /> },
  ];

  const programsFeatures = [
    { name: "Today's Deals", icon: <Percent className="w-5 h-5" /> },
    { name: "Amazon Outlet", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Try Prime", icon: <Star className="w-5 h-5" /> },
    { name: "Subscribe & Save", icon: <Package className="w-5 h-5" /> },
  ];

  const browseOptions = [
    { name: "Amazon Home", icon: <Home className="w-5 h-5" /> },
    { name: "Trending", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Best Sellers", icon: <Star className="w-5 h-5" /> },
    { name: "New Releases", icon: <Package className="w-5 h-5" /> },
    { name: "Movers & Shakers", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-[#000000c5]  z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-[var(--white)] z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-[var(--gray-dark)] text-[var(--white)] p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <User className="w-6 h-6" />
            <div>
              <h2 className="text-lg font-semibold">Browse</h2>
              <h3 className="text-2xl font-bold text-[var(--white)]">Amazon</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[var(--white)] hover:text-[var(--yellow)] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sign In */}
        <div className="border-b border-gray-200">
          <SignInSection onClose={onClose} />
        </div>

        {/* Browse Amazon Section */}
        <div className="py-2">
          {browseOptions.map((item, index) => (
            <Link
              href={index === 0 ? "/" : "/store"}
              key={index}
              onClick={onClose}
              className="w-full p-4 text-left hover:bg-[var(--bg-light)] transition-colors flex  items-center space-x-3 border-b border-gray-100"
            >
              <span className="text-[var(--gray-dark)]">{item.icon}</span>
              <span className="text-[var(--black)]  font-medium">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Top Categories */}
        <div className="border-t border-gray-300">
          <div className="bg-[var(--bg-light)] p-4">
            <h3 className="text-[var(--black)] font-bold text-lg">
              Top categories
            </h3>
          </div>

          {topCategories.map((category, index) => (
            <div key={index}>
              <button
                onClick={() => toggleSection(category.name)}
                className="w-full p-4 text-left hover:bg-[var(--bg-light)] transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-[var(--gray-dark)]">
                    {category.icon}
                  </span>
                  <span className="text-[var(--black)] font-medium">
                    {category.name}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[var(--gray-dark)] transition-transform ${
                    expandedSections.includes(category.name) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedSections.includes(category.name) && (
                <div className="bg-[var(--bg-light)] pl-12 pr-4 pb-4">
                  <div className="space-y-2">
                    <Link
                      href="/store"
                      onClick={onClose}
                      className="block w-full text-left py-2 text-[var(--blue-link)] hover:text-[var(--orange)] transition-colors"
                    >
                      All {category.name}
                    </Link>
                    <button className="block w-full text-left py-2 text-[var(--blue-link)] hover:text-[var(--orange)] transition-colors">
                      Best Sellers
                    </button>
                    <button className="block w-full text-left py-2 text-[var(--blue-link)] hover:text-[var(--orange)] transition-colors">
                      New Releases
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Programs & Features */}
        <div className="border-t border-gray-300">
          <div className="bg-[var(--bg-light)] p-4">
            <h3 className="text-[var(--black)] font-bold text-lg">
              Programs & Features
            </h3>
          </div>

          {programsFeatures.map((program, index) => (
            <button
              key={index}
              className="w-full p-4 text-left hover:bg-[var(--bg-light)] transition-colors flex items-center space-x-3 border-b border-gray-100"
            >
              <span className="text-[var(--gray-dark)]">{program.icon}</span>
              <span className="text-[var(--black)] font-medium">
                {program.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
